import React, { useState } from 'react'
import { useCreateBid, useTotalBids } from './gql/query'

interface IBiddingState 
{
    projectTotalBids: number
    createBid: (bid) => void
    getTotalBids: (projectId) => void
}

const BiddingContext = React.createContext<IBiddingState>({
    projectTotalBids: 0,
    createBid(bid) {},
    getTotalBids(projectId) {}
})

const useBiddingContext = () =>
{
    const context = React.useContext(BiddingContext)
    if(context === undefined) throw new Error("context doest not exist")
    return context
}

interface IProps {
    children: React.ReactNode;
}

const BiddingContextProvider: React.FC<IProps> = ({children}) => {
    const createBidQuery = useCreateBid((rs) => {})
    const projectTotalBidsQuery = useTotalBids()

    const [ projectTotalBids, setProjectTotalBids ] = useState<number>()

    const createBid = async(bid) =>
    {
        await createBidQuery[0]({ variables: { bid } }).then((rs) => {
            console.log(rs)
        })
        .catch((err) => console.log(err))
    }

    const getTotalBids = (projectId) =>
    {
         projectTotalBidsQuery[0]({ variables: { projectId: '64087c8e4986c31f975b64fd' }
          }).then((rs) => setProjectTotalBids(rs?.data?.totalBids))
          .catch((err) => console.log(err))
    }

    return (
        <BiddingContext.Provider
            value={{createBid, getTotalBids, projectTotalBids}}
        >
            {children}
        </BiddingContext.Provider>
    )
}

export {BiddingContextProvider, useBiddingContext}