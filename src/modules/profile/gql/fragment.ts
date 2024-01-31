import { gql } from "@apollo/client";


export const ProfileFragment = gql `
    fragment Profile on Profile {
        _id
        userID
        location
        avatar
        skills
        banner
        hourlyRate
        professionalHeadline
        summary
        recommendations
        createdAt
        updatedAt
        minRate
        maxRate
        fullName
        # freelancerRating
        # clientRating
        user {
            _id
            email
            username
            firstName
            lastName
        }
        review {
            _id
        }
        publication {
            title
            publisher
            summary
            _id
        }
        qualification {
            title
            conferringOrganization
            summary
            startYear
            _id
        }
        education {
            country
            insitution
            degree
            startYear
            endYear
            _id
        }
        experience {
            title
            company
            startMonth
            startYear
            endMonth
            endYear
            working
            summary
            _id
        }
    }
`