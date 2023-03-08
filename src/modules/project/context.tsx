import React from 'react'
import { useCreateProject } from './gql/query';
import {IProject} from './model'

interface IState {
    loading: boolean;
    createProject: (project: IProject) => Promise<void>;
}

const ProjectContext = React.createContext<IState>({
    loading: false,
    createProject(project) {
      return null;
    }
});

const useProjectState = () => {
    const context = React.useContext(ProjectContext);
    if (context === undefined) throw new Error("context doest not exist");
    return context;
};

interface IProps {
    children: React.ReactNode;
}

const ProjectContextProvider: React.FC<IProps> = ({ children }) => {
    const createProjectQuery = useCreateProject((rs) => {});
  
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
        value={{ loading: createProject[1].loading, createProject }}
      >
        {children}
      </ProjectContext.Provider>
    );
  };

  export { ProjectContextProvider, useProjectState };