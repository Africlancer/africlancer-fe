import { useMutation, gql } from "@apollo/client";

const CREATE_PROJECT = gql`
      mutation CreateProject($project: CreateProjectInput!) {
        createProject(project: $project)
        {
          _id
        }
  }
`;

const FIND_PROJECTS = gql`
    query FindProjects($query: QueryProjectInput!) {
      findProjects(query: $query) {
            title,
            minBudget,
            maxBudget,
            details,
            summary,
            startDate,
            endDate,
            _id,
            status,
            type
        }
    }
`

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

export { CREATE_PROJECT, FIND_PROJECTS }