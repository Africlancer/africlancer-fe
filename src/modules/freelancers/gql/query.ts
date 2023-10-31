import { gql, useLazyQuery } from '@apollo/client'

const FETCH_ALL_FREELANCERS = gql`
  query FindUsers($query: QueryUserInput!) {
    findUsers(query: $query) {
      _id
      profileID
      firstName
      lastName
      email
      username
    }
  }
`

const FETCH_FREELANCERS_FILTER = gql`
  query FindProfilesFilter($query: QueryProfileInput!, $fullSearch: Boolean!) {
    findProfilesFilter(query: $query, fullSearch: $fullSearch) {
      avatar
      hourlyRate
      professionalHeadline
      summary
      user {
        _id
        profileID
        firstName
        lastName
        email
        username
      }
    }
  }
`

export const useFetchAllFreelancers = () => {
  return useLazyQuery(FETCH_ALL_FREELANCERS, {
    fetchPolicy: 'no-cache',
  })
}

export const useFetchFreelancersFilter = () => {
  return useLazyQuery(FETCH_FREELANCERS_FILTER, {
    fetchPolicy: 'no-cache',
  })
}
