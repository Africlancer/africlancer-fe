import { gql } from "@apollo/client";


export const ProjectFragment = gql `
    fragment Project on Project {
        _id
        userId
        title
        minBudget
        maxBudget
        summary
        details
        startDate
        endDate
        projectId
        status
        type
        totalBids
        averageBid
        skills
        user {
            _id
        }
    }
`