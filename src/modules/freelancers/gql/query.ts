import { gql, useLazyQuery } from "@apollo/client";

const FETCH_ALL_FREELANCERS = gql`
    query FindUsers($query: QueryUserInput!)
    {
        findUsers(query: $query)
        {
            _id, profileID, firstName, lastName, email, username
        }
    }

`

export const useFetchAllFreelancers = () =>
{
    return useLazyQuery(FETCH_ALL_FREELANCERS, {
        fetchPolicy: "no-cache"
    })
}