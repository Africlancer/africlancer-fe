import { useMutation, gql } from "@apollo/client";

const ADD_PUBLICATION = gql`
    mutation AddOrUpdatePublications($publication: PublicationsInput!) {
        addOrUpdatePublications(publication: $publication)
}
`

const ADD_QUALIFICATION = gql`
    mutation AddOrUpdatePublications($publication: PublicationsInput!) {
        addOrUpdatePublications(publication: $publication) {
        j
    }
}
`
const FIND_ONE_PROFILE = gql`
    query FindOneProfile {
        findOneProfile {
            avatar,
            banner,
            hourlyRate,
            professionalHeadline,
            summary,
            recommendations,
            publications { title, publisher, summary }
        }
    }
`

const UPDATE_PROFILE = gql`
    mutation UpdateProfile($profile: QueryProfileInput!){
    updateProfile(profile: $profile)
  }
`

export { ADD_PUBLICATION, ADD_QUALIFICATION, FIND_ONE_PROFILE, UPDATE_PROFILE }