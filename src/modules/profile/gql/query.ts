import { useMutation, gql } from "@apollo/client";

const ADD_PUBLICATION = gql`
    mutation AddOrUpdatePublications($publication: PublicationsInput!) {
        addOrUpdatePublications(publication: $publication) {
        j
    }
}
`

const ADD_QUALIFICATION = gql`
    mutation AddOrUpdatePublications($publication: PublicationsInput!) {
        addOrUpdatePublications(publication: $publication) {
        j
    }
}
`

export { ADD_PUBLICATION, ADD_QUALIFICATION }