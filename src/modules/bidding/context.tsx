import useApNotification from '@/src/hooks/notification'
import { useLazyQuery } from '@apollo/client'
import React, { useState } from 'react'
import { FIND_ONE_BID, useAverageBid, useCreateBid, useDeleteBid, useFindBids, useFindOneBid, useTotalBids, useUpdateBid } from './gql/query'

interface IBiddingState 
{
    notificationContext: React.ReactElement<any, string | React.JSXElementConstructor<any>>
    loading: boolean
    projectTotalBids: number
    projectBids: [],
    averageBid: number,
    userBid: any,
    createBid: (bid, query, refetchFunc) => void
    updateBid: (id, bid, refetchFunc, refetchQuery) => void
    deleteBid: (id, refetchFunc, refetchQuery) => void
    getTotalBids: (projectId) => void
    getAverageBid: (projectId) => void
    findOneBid: (query) => void
    findBids: (query, userId?) => void
    setUserBid: React.Dispatch<any>
}

const BiddingContext = React.createContext<IBiddingState>({
    notificationContext: null,
    loading: false,
    projectTotalBids: 0,
    projectBids: [],
    averageBid: 0,
    userBid: {},
    createBid(bid, query, refetchFunc) {},
    updateBid(id, bid, refetchFunc, refetchQuery) {},
    deleteBid(id, refetchFunc, refetchQuery){},
    getTotalBids(projectId) {},
    getAverageBid(projectId) {},
    findOneBid(query) {},
    findBids(query, userId?) {},
    setUserBid(){}
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
    

    const createBid = async(bid, query, refetchFunc) =>
    {
        setLoading(true)
        await createBidQuery[0]({ variables: { bid } }).then((rs) => {
            //console.log(rs)
            successMsg('Successs', 'Your bid has been placed.')
            setLoading(false)
            refetchFunc({query})
        })
        .catch((err) => {console.log(err); errorMsg('Error', err.message); setLoading(false)})
    }

    const deleteBid = async(id, refetchFunc, refetchQuery) => 
    {
        setLoading(true)
        await deleteBidQuery[0]({  
            variables: { id } }).then((rs) => {
            //console.log(rs)
            successMsg('Successs', 'Your bid has been deleted.')
            setLoading(false)
            setUserBid(null)
        })
        .catch((err) => {console.log(err); errorMsg('Error', err.message); setLoading(false)})
    }

    const updateBid = async(id, bid, refetchFunc, refetchQuery) => 
    {
        setLoading(true)
        await updateBidQuery[0]({
            variables: { id, bid } }).then((rs) => {
            //console.log(rs)
            successMsg('Successs', 'Your bid has been updated.')
            setLoading(false)
            refetchFunc({query: refetchQuery})
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
        //setLoading(true)
        findOneBidQuery[0]({ variables: { query: query },
            onCompleted(data) {
                console.log(data)
            },
        })
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
            findOneBid, findBids, projectBids, averageBid, getAverageBid, updateBid, deleteBid,
            setUserBid }}
        >
            {children}
        </BiddingContext.Provider>
    )
}

export {BiddingContextProvider, useBiddingContext}