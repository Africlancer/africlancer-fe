import React, { useState } from 'react'
import { useCreateProject, useFindAllProjects, useFindProject, useUpdateProject } from './gql/query';
import {IProject} from './model'
import useApNotification from '@/src/hooks/notification'

interface IProjectState {
    notificationContext: React.ReactElement<any, string | React.JSXElementConstructor<any>>
    hasBiddingEnded: boolean
    status: any
    daysLeft: number
    projects: any,
    activeProject: any
    createProject: (project: IProject) => Promise<void>
    updateProject: (project: IProject) => Promise<void>
    fetchAllProjects: (query, fullSearch) => void
    fetchProject: (query) => void
}

const ProjectContext = React.createContext<IProjectState>({
    notificationContext: null,
    hasBiddingEnded: null,
    status: null,
    daysLeft: null,
    projects: [],
    activeProject: {},
    createProject(project) {
      return null;
    },
    updateProject(project) {return null},
    fetchProject(query) {},
    fetchAllProjects(query, fullSearch) {},
});

const useProjectContext = () => {
    const context = React.useContext(ProjectContext);
    if (context === undefined) throw new Error("context doest not exist");
    return context;
};

interface IProps {
    children: React.ReactNode;
}

const ProjectContextProvider: React.FC<IProps> = ({ children }) => {
   const { notificationContext, successMsg, errorMsg } = useApNotification();

    const [projects, setProjects] = useState([])
    const [activeProject, setActiveProject] = useState([])
    const [hasBiddingEnded, setHasBiddingEnded] = useState<boolean>()
    const [daysLeft, setDaysLeft] = useState<number>()
    const [status, setStatus] = useState<string>(null)

    const fetchAllProjectsQuery = useFindAllProjects()
    const fetchProjectQuery = useFindProject()
    const createProjectQuery = useCreateProject((rs) => {});
    const updateProjectQuery = useUpdateProject((rs) => {});

    const fetchAllProjects = (query, fullSearch) =>
    {
      return fetchAllProjectsQuery[0]({
        variables: {
          query: query,
          fullSearch: fullSearch
        }
      }).then((res) => {
        setProjects(res.data.findProjectsFilter)
        console.log(res.data)
      })
      .catch((err) => console.log(err))
    }

    const fetchProject = (query) =>
    {
      return fetchProjectQuery[0]({
        variables: {
          query: query
        }
      }).then((res) => {
        setActiveProject(res.data.findOneProject)

        let date = new Date
        let newDate = new Date(date)
        // let newDateStr = newDate.getFullYear() + " - " + (newDate.getMonth() + 1) + " - " + 
        // newDate.getDate()

        let endDate = new Date(res.data.findOneProject.endDate)
        // let endDateStr = endDate.getFullYear() + " - " + (endDate.getMonth() + 1) + " - " + 
        // endDate.getDate()

        const dateInPast = (firstDate, secondDate) => {
          if(firstDate.setHours(0,0,0,0) <= secondDate.setHours(0,0,0,0)) {
             setHasBiddingEnded(true)
             setStatus('CLOSED')
          } 
          
          else
          {
            let difference = firstDate.getTime() - secondDate.getTime();
            let totalDays = Math.ceil(difference / (1000 * 3600 * 24));
            setHasBiddingEnded(false)
            setStatus('OPEN')
            setDaysLeft(totalDays)
          }
        }
        dateInPast(endDate, newDate)
        //console.log(dateInPast(endDate, newDate))
        //console.log(newDateStr)
      })
      .catch((err) => console.log(err))
    }


    const createProject = async (project: IProject): Promise<void> => {
      await createProjectQuery[0]({ variables: { project } }).then((rs) => {
        
        if (rs.data?.createProject) {
          console.log("Project created..");
        }
      });
    };

    const updateProject = async (project: IProject): Promise<void> => {
      await updateProjectQuery[0]({ variables: { project } }).then((rs) => {
        console.log(rs)
        
        if (rs.data?.createProject) {
          console.log("Project created..");
        }
      });
    };
  
    return (
      <ProjectContext.Provider
        value={{ projects, createProject, fetchAllProjects, activeProject, fetchProject,
          hasBiddingEnded, daysLeft, updateProject, notificationContext, status
        }}
      >
        {children}
      </ProjectContext.Provider>
    );
  };

  export { ProjectContextProvider, useProjectContext };