import { useMutation, gql, useQuery, useLazyQuery } from '@apollo/client'
import { ProjectFragment } from './fragment'
import { gqlClient } from '@/src/ApolloClient'
import { IQueryProjectInput } from '../model'

const CREATE_PROJECT = gql`
  mutation CreateProject($project: CreateProjectInput!) {
    createProject(project: $project) {
      _id
    }
  }
`
const UPDATE_PROJECT = gql`
  mutation UpdateProject($id: String!, $project: QueryProjectInput!) {
    updateProject(id: $id, project: $project)
  }
`
const FIND_PROJECTS = gql`
  query FindProjects($query: QueryProjectInput!) {
    findProjects(query: $query) {
      ...Project
    }
  }
  ${ProjectFragment}
`
const FIND_PROJECT = gql`
  query FindOneProject($query: QueryProjectInput!) {
    findOneProject(query: $query) {
      ...Project
    }
  }
  ${ProjectFragment}
`
const FIND_PROJECTS_FILTER = gql`
  query FindProjects($query: QueryProjectInput!, $fullSearch: Boolean!) {
    findProjectsFilter(query: $query, fullSearch: $fullSearch) {
      ...Project
    }
  }
  ${ProjectFragment}
`
const FIND_ALL_PROJECTS = gql`
  query FindProjectsFilter($query: QueryProjectInput!, $fullSearch: Boolean!) {
    findProjectsFilter(query: $query, fullSearch: $fullSearch) {
      title
      minBudget
      maxBudget
      details
      summary
      startDate
      endDate
      _id
      status
      type
      averageBid
      totalBids
      skills
    }
  }
`
const NEW_PROJECT_SUBSCRIPTION = gql`
  subscription NewProject {
    newProject {
      title
    }
  }
`

export const findProjectAsync = async (query: IQueryProjectInput, token: string) => {
  gqlClient.setHeader("Authorization", `Bearer ${token}`);

  return gqlClient
    .request(FIND_PROJECT, { query })
    .then((res: any) => {
      return res.findOneProject;
    });
};

export default function useProjectQuery () {
  const findProjectsQ = useLazyQuery(FIND_PROJECTS, {fetchPolicy: "no-cache"});
  const findProjectsFilterQ = useLazyQuery(FIND_PROJECTS_FILTER, {fetchPolicy: "no-cache"});
  const findProjectQ = useLazyQuery(FIND_PROJECT, {fetchPolicy: "no-cache"});
  const createProjectQ = useMutation(CREATE_PROJECT)
  const updateProjectQ = useMutation(UPDATE_PROJECT)

  return {
    createProjectQ,
    findProjectQ,
    findProjectsQ,
    updateProjectQ,
    findProjectsFilterQ,
    loading: findProjectsQ[1].loading || findProjectsFilterQ[1].loading,
    actionLoading: 
      createProjectQ[1].loading || updateProjectQ[1].loading
  }
}

export function NewProjects() {
  return 'This is new project'
}

export const useCreateProject = (callback: (rs: any) => void) => {
  return useMutation(CREATE_PROJECT, {
    onCompleted: (rs) => {
      if (rs?.createProject) {
        callback(rs?.createProject)
      }
    },
    onError: (error: any) => {
      console.log(error)
    },
  })
}

export const useUpdateProject = (callback: (rs: any) => void) => {
  return useMutation(UPDATE_PROJECT, {
    onCompleted: (rs) => {
      if (rs?.updateProject) {
        callback(rs?.updateProject)
      }
    },
    onError: (error: any) => {
      console.log(error)
    },
  })
}

export const useFindAllProjects = () => {
  return useLazyQuery(FIND_ALL_PROJECTS, {
    fetchPolicy: 'no-cache',
  })
}

export const useFindProject = () => {
  return useLazyQuery(FIND_PROJECT, {
    fetchPolicy: 'no-cache',
  })
}

export { CREATE_PROJECT, FIND_PROJECTS, FIND_ALL_PROJECTS, NEW_PROJECT_SUBSCRIPTION }
