import { useMutation, gql, useQuery, useLazyQuery } from "@apollo/client";

const CREATE_BID = gql`
    mutation CreateBid($bid: CreateBidInput!) {
        createBid(bid: $bid)
        {
            _id
        }
    }
`
const TOTAL_BIDS = gql`
  query TotalBids($projectId: String!) {
      totalBids(projectId: $projectId)
  }
`

const AVERAGE_BID = gql`
  query AverageBids($projectId: String!) {
    averageBids(projectId: $projectId)
  }
`

const FIND_ONE_BID = gql`
  query FindOneBid($query: QueryBidInput!){
    findOneBid(query:$query){
        userID,
      }
  }
`
const FIND_BIDS = gql`
  query FindBids($query: QueryBidInput!) {
    findBids(query: $query)
    { proposal, userID, projectID, isAwarded, budget, deliveredIn }
  }
`  

export const useCreateBid = (callback: (rs: any) => void) => {
    return useMutation(CREATE_BID, {
      onCompleted: (rs) => {
        if (rs?.createBid) {
          callback(rs?.createBid);
        }
      },
      onError: (error: any) => {
        console.log(error);
      },
    });
}

export const useTotalBids = () => {
    return useLazyQuery(TOTAL_BIDS, {
        fetchPolicy: "no-cache"
    })
};

export const useAverageBid = () => {
  return useLazyQuery(AVERAGE_BID, {
      fetchPolicy: "no-cache"
  })
};

export const useFindOneBid = () => {
  return useLazyQuery(FIND_ONE_BID, {
    fetchPolicy: "no-cache"
  })
}

export const useFindBids = () => {
  return useLazyQuery(FIND_BIDS, {
    fetchPolicy: "no-cache"
  })
}

export {FIND_ONE_BID, TOTAL_BIDS, AVERAGE_BID}