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