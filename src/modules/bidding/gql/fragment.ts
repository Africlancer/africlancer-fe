import { gql } from "@apollo/client";


export const BiddingFragment = gql `
    fragment Bid on Bid {
        _id
        userID
        projectID
        proposal
        isAwarded
        budget
        hourlyRate
        deliveredIn
        user {
            _id
        }
    }
`