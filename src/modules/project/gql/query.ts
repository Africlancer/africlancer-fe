import { useMutation, gql } from "@apollo/client";

const CREATE_PROJECT = gql`
      mutation CreateProject($project: CreateProjectInput!) {
        createProject(project: $project)
  }
`;

export const useCreateProject = (callback: (rs: any) => void) => {
    return useMutation(CREATE_PROJECT, {
      onCompleted: (rs) => {
        if (rs?.createProject) {
          callback(rs?.createProject);
        }
      },
      onError: (error: any) => {
        console.log(error);
      },
    });
}