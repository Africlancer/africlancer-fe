import React, { useState } from 'react'
import { useCreateProject, useFindAllProjects, useFindProject } from './gql/query';
import {IProject} from './model'

interface IProjectState {
    projects: any,
    activeProject: any
    createProject: (project: IProject) => Promise<void>
    fetchAllProjects: (query) => void
    fetchProject: (query) => void
}

const ProjectContext = React.createContext<IProjectState>({
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
        console.log(res.data.findOneProject)
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
        value={{ projects, createProject, fetchAllProjects, activeProject, fetchProject }}
      >
        {children}
      </ProjectContext.Provider>
    );
  };

  export { ProjectContextProvider, useProjectContext };