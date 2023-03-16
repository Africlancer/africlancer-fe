import React, { useState } from 'react'
import { useAverageBid, useCreateBid, useFindBids, useFindOneBid, useTotalBids } from './gql/query'

interface IBiddingState 
{
    projectTotalBids: number
    projectBids: [],
    averageBid: number,
    createBid: (bid) => void
    getTotalBids: (projectId) => void
    getAverageBid: (projectId) => void
    findOneBid: (query) => void
    findBids: (query, userId?) => void
}

const BiddingContext = React.createContext<IBiddingState>({
    projectTotalBids: 0,
    projectBids: [],
    averageBid: 0,
    createBid(bid) {},
    getTotalBids(projectId) {},
    getAverageBid(projectId) {},
    findOneBid(query) {},
    findBids(query, userId?) {},
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
    const averageBidQuery = useAverageBid()
    const findOneBidQuery = useFindOneBid()
    const findBidsQuery = useFindBids()

    const [ projectTotalBids, setProjectTotalBids ] = useState<number>()
    const [ projectBids, setProjectBids] = useState<[]>([])
    const [ averageBid, setAverageBid ] = useState<number>()

    const createBid = async(bid) =>
    {
        await createBidQuery[0]({ variables: { bid } }).then((rs) => {
            console.log(rs)
        })
        .catch((err) => console.log(err))
    }

    const getTotalBids = (projectId) =>
    {
         projectTotalBidsQuery[0]({ variables: { projectId }
          }).then((rs) => setProjectTotalBids(rs?.data?.totalBids))
          .catch((err) => console.log(err))
    }

    const getAverageBid = (projectId) =>
    {
        averageBidQuery[0]({ variables: { projectId }
          }).then((rs) => setAverageBid(rs?.data?.averageBids))
          .catch((err) => console.log(err))
    }

    const findOneBid = (query) =>
    {
        findOneBidQuery[0]({ variables: { query: {userID: ''} }
        }).then((rs) => console.log(rs))
        .catch((err) => console.log(err))
    }

    const findBids = (query, userId?) => {
        findBidsQuery[0]({ variables: { query }
        }).then((rs) => {
            setProjectBids(rs?.data?.findBids)
            // if (userId)
            // {
            //     const filter = rs?.data?.findBids?.filter(item => item.userID === userId)
            //     if(filter?.length > 0)
            //     {
            //         console.log('gre')
            //         setUserBidExist(true)
            //     }
            //     else { setUserBidExist(false); console.log('less') }
            // }
        })
        .catch((err) => console.log(err))
    }

    return (
        <BiddingContext.Provider
            value={{createBid, getTotalBids, projectTotalBids, findOneBid, findBids, projectBids, averageBid, getAverageBid}}
        >
            {children}
        </BiddingContext.Provider>
    )
}

export {BiddingContextProvider, useBiddingContext}