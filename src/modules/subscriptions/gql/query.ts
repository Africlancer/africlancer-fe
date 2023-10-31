import { useMutation, gql, useQuery, useLazyQuery } from '@apollo/client'

const NEW_PROJECT_SUBSCRIPTION = gql`
  subscription NewProject {
    newProject {
      title
    }
  }
`

export { NEW_PROJECT_SUBSCRIPTION }
