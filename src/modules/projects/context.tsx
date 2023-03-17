import React, { useState } from 'react'
import { useCreateProject, useFindAllProjects, useFindProject } from './gql/query';
import {IProject} from './model'

interface IProjectState {
    hasBiddingEnded: boolean
    daysLeft: number
    projects: any,
    activeProject: any
    createProject: (project: IProject) => Promise<void>
    fetchAllProjects: (query) => void
    fetchProject: (query) => void
}

const ProjectContext = React.createContext<IProjectState>({
    hasBiddingEnded: null,
    daysLeft: null,
    projects: [],
    activeProject: {},
    createProject(project) {
      return null;
    },
    fetchProject(query) {},
    fetchAllProjects(query) {},
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
    const [projects, setProjects] = useState([])
    const [activeProject, setActiveProject] = useState([])
    const [hasBiddingEnded, setHasBiddingEnded] = useState<boolean>()
    const [daysLeft, setDaysLeft] = useState<number>()

    const fetchAllProjectsQuery = useFindAllProjects()
    const fetchProjectQuery = useFindProject()
    const createProjectQuery = useCreateProject((rs) => {});

    const fetchAllProjects = (query) =>
    {
      return fetchAllProjectsQuery[0]({
        variables: {
          query: query
        }
      }).then((res) => {
        setProjects(res.data.findProjectsFilter)
        console.log(res.data.findProjectsFilter)
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
          } 
          
          else
          {
            let difference = firstDate.getTime() - secondDate.getTime();
            let totalDays = Math.ceil(difference / (1000 * 3600 * 24));
            setHasBiddingEnded(false)
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
        console.log('kkk')
        
        if (rs.data?.createProject) {
          console.log("Project created..");
        }
      });
    };
  
    return (
      <ProjectContext.Provider
        value={{ projects, createProject, fetchAllProjects, activeProject, fetchProject,
          hasBiddingEnded, daysLeft
        }}
      >
        {children}
      </ProjectContext.Provider>
    );
  };

  export { ProjectContextProvider, useProjectContext };