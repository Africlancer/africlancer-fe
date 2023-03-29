import useApNotification from '@/src/hooks/notification'
import React, { useState } from 'react'
import { useAverageBid, useCreateBid, useDeleteBid, useFindBids, useFindOneBid, useTotalBids, useUpdateBid } from './gql/query'

interface IBiddingState 
{
    notificationContext: React.ReactElement<any, string | React.JSXElementConstructor<any>>
    loading: boolean
    projectTotalBids: number
    projectBids: [],
    averageBid: number,
    userBid: any,
    createBid: (bid, query) => void
    updateBid: (bid) => void
    deleteBid: (id) => void
    getTotalBids: (projectId) => void
    getAverageBid: (projectId) => void
    findOneBid: (query) => void
    findBids: (query, userId?) => void
}

const BiddingContext = React.createContext<IBiddingState>({
    notificationContext: null,
    loading: false,
    projectTotalBids: 0,
    projectBids: [],
    averageBid: 0,
    userBid: {},
    createBid(bid, query) {},
    updateBid(bid) {},
    deleteBid(id){},
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
    const { notificationContext, successMsg, errorMsg } = useApNotification();

    const createBidQuery = useCreateBid((rs) => {}, )
    const deleteBidQuery = useDeleteBid((rs) => {})
    const updateBidQuery = useUpdateBid((rs) => {})
    const projectTotalBidsQuery = useTotalBids()
    const averageBidQuery = useAverageBid()
    const findOneBidQuery = useFindOneBid()
    const findBidsQuery = useFindBids()

    const [ projectTotalBids, setProjectTotalBids ] = useState<number>()
    const [ projectBids, setProjectBids] = useState<[]>([])
    const [ averageBid, setAverageBid ] = useState<number>()
    const [ loading, setLoading ] = useState(false)
    const [ userBid, setUserBid ] = useState(null) 

    const createBid = async(bid, query) =>
    {
        setLoading(true)
        await createBidQuery[0]({ variables: { bid } }).then((rs) => {
            console.log(rs)
            successMsg('Successs', 'Your bid has been placed.')
            setLoading(false)
            findOneBid(query)
            // setTimeout(() => {
            //     setUserBidExist(true)
            // }, 2000);
        })
        .catch((err) => {console.log(err); errorMsg('Error', err.message); setLoading(false)})
    }

    const deleteBid = async(id) => 
    {
        setLoading(true)
        await deleteBidQuery[0]({ variables: { id } }).then((rs) => {
            console.log(rs)
            successMsg('Successs', 'Your bid has been deleted.')
            setLoading(false)
        })
        .catch((err) => {console.log(err); errorMsg('Error', err.message); setLoading(false)})
    }

    const updateBid = async(bid) => 
    {
        setLoading(true)
        await updateBidQuery[0]({ variables: { bid } }).then((rs) => {
            console.log(rs)
            successMsg('Successs', 'Your bid has been updated.')
            setLoading(false)
        })
        .catch((err) => {console.log(err); errorMsg('Error', err.message); setLoading(false)})
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
        setLoading(true)
        findOneBidQuery[0]({ variables: { query: query }
        }).then((rs) => {console.log(rs.data); setUserBid(rs.data?.findOneBid)})
        .catch((err) => console.log(err)).finally(() => setLoading(false))
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
            value={{notificationContext, loading, userBid, createBid, getTotalBids, projectTotalBids, 
            findOneBid, findBids, projectBids, averageBid, getAverageBid, updateBid, deleteBid}}
        >
            {children}
        </BiddingContext.Provider>
    )
}

export {BiddingContextProvider, useBiddingContext}