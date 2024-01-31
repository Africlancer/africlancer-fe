import useApNotification from '@/src/hooks/notification'
import { useLazyQuery } from '@apollo/client'
import React, { useState } from 'react'
import useBiddingQuery, {
  FIND_ONE_BID,
  useAverageBid,
  useAwardBid,
  useCreateBid,
  useDeleteBid,
  useFindBids,
  useFindOneBid,
  useTotalBids,
  useUnawardBid,
  useUpdateBid,
} from './gql/query'
import { IBid } from './model'
import { useProjectContext } from '../project/context'

interface IBiddingState {
  loading: boolean
  actionLoading: boolean
  projectTotalBids: number
  projectBids: any
  averageBid: number
  userBid: any
  awardedBids: any
  unawardedBids: any
  createBid: (bid: IBid) => Promise<any>
  updateBid: (id, bid, refetchFunc, refetchQuery) => void
  deleteBid: (id, refetchFunc, refetchQuery) => void
  getTotalBids: (projectId) => void
  getAverageBid: (projectId) => void
  findOneBid: (query) => void
  findBids: (query, userId?) => void
  awardBid: (projectId, bidId) => void
  unawardBid: (projectId, bidId) => void
  setUserBid: React.Dispatch<any>
}

const BiddingContext = React.createContext<IBiddingState>({
  loading: false,
  actionLoading: false,
  projectTotalBids: 0,
  projectBids: [],
  averageBid: 0,
  userBid: {},
  awardedBids: [],
  unawardedBids: [],
  createBid(bid) {},
  updateBid(id, bid, refetchFunc, refetchQuery) {},
  deleteBid(id, refetchFunc, refetchQuery) {},
  getTotalBids(projectId) {},
  getAverageBid(projectId) {},
  findOneBid(query) {},
  findBids(query, userId?) {},
  setUserBid() {},
  awardBid(projectId, bidId) {},
  unawardBid(projectId, bidId) {},
} as any)

const useBiddingContext = () => {
  const context = React.useContext(BiddingContext)
  if (context === undefined) throw new Error('context doest not exist')
  return context
}

interface IProps {
  children: React.ReactNode
}

const BiddingContextProvider: React.FC<IProps> = ({ children }) => {
  const biddingQuery = useBiddingQuery()
  const {findProject} = useProjectContext()
  const [actionLoading, setActionLoading] = useState(false)

  const createBidQuery = useCreateBid((rs) => {})
  const deleteBidQuery = useDeleteBid((rs) => {})
  const updateBidQuery = useUpdateBid((rs) => {})
  const awardBidQuery = useAwardBid((rs) => {})
  const unawardBidQuery = useUnawardBid((rs) => {})
  const projectTotalBidsQuery = useTotalBids()
  const averageBidQuery = useAverageBid()
  const findOneBidQuery = useFindOneBid()
  const findBidsQuery = useFindBids()
  const [projectTotalBids, setProjectTotalBids] = useState<number>(0)
  const [projectBids, setProjectBids] = useState<any>([])
  const [averageBid, setAverageBid] = useState<number>(0)
  const [loading, setLoading] = useState(false)
  const [userBid, setUserBid] = useState(null)
  const [awardedBids, setAwardedBids] = useState<any>([])
  const [unawardedBids, setUnawardedBids] = useState<any>([])
  const { errorMsg, notificationContext, successMsg } = useApNotification()

  const createBid = async (bid: IBid): Promise<any> => {
    setActionLoading(true)

    return new Promise<void>((resolve, reject) => {
      biddingQuery.createBidQ[0]({ variables: { bid } })
      .then((res) => {
        findProject({_id: bid.projectID}).then(() => {
          successMsg('Success', 'Bid Placed Successfully')
          setActionLoading(false)
        })
        resolve(res?.data?.createBid)
      }).catch((err) => {
        errorMsg('Error', err)
        reject(err)
      })
    })
  }

  const deleteBid = async (id, refetchFunc, refetchQuery) => {
    setLoading(true)
    await deleteBidQuery[0]({
      variables: { id },
    })
      .then((rs) => {
        //console.log(rs)
         successMsg('Successs', 'Your bid has been deleted.')
        setLoading(false)
        setUserBid(null)
        getTotalBids(id)
        getAverageBid(id)
      })
      .catch((err) => {
         errorMsg('Error', err.message)
        setLoading(false)
      })
  }

  const updateBid = async (id, bid, refetchFunc, refetchQuery) => {
    setLoading(true)
    await updateBidQuery[0]({
      variables: { id, bid },
    })
      .then((rs) => {
        //console.log(rs)
         successMsg('Success', 'Your bid has been updated.')
        setLoading(false)
        refetchFunc({ query: refetchQuery })
        getTotalBids(refetchQuery.projectID)
        getAverageBid(refetchQuery.projectID)
      })
      .catch((err) => {
         errorMsg('Error', err.message)
        setLoading(false)
      })
  }

  const awardBid = async (projectId, bidId) => {
    setLoading(true)
    await awardBidQuery[0]({
      variables: { projectId, bidId },
    })
      .then((rs) => {
         successMsg('Success', 'Bid has been awarded')
        setLoading(false)
        findBids({ projectID: projectId })
      })
      .catch((err) => {
         errorMsg('Error', err.message)
        setLoading(false)
      })
  }

  const unawardBid = async (projectId, bidId) => {
    setLoading(true)
    await unawardBidQuery[0]({
      variables: { projectId, bidId },
    })
      .then((rs) => {
         successMsg('Success', 'Bid has been unawarded')
        setLoading(false)
        findBids({ projectID: projectId })
      })
      .catch((err) => {
         errorMsg('Error', err.message)
        setLoading(false)
      })
  }

  const getTotalBids = (projectId) => {
    projectTotalBidsQuery[0]({ variables: { projectId } })
      .then((rs) => setProjectTotalBids(rs?.data?.totalBids))
      .catch((err) => console.log(err))
  }

  const getAverageBid = (projectId) => {
    averageBidQuery[0]({ variables: { projectId } })
      .then((rs) => setAverageBid(rs?.data?.averageBids))
      .catch((err) => console.log(err))
  }

  const findOneBid = (query) => {
    //setLoading(true)
    findOneBidQuery[0]({
      variables: { query: query },
      onCompleted(data) {
        console.log(data)
      },
    })
  }

  const findBids = (query, userId?) => {
    findBidsQuery[0]({ variables: { query } })
      .then((rs) => {
        console.log(rs?.data?.findBids)
        setProjectBids(rs?.data?.findBids)
        setAwardedBids(rs?.data?.findBids.filter((item) => item?.isAwarded === true))
        setUnawardedBids(rs?.data?.findBids.filter((item) => item?.isAwarded === false))

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
      value={{
        loading,
        userBid,
        createBid,
        getTotalBids,
        projectTotalBids,
        findOneBid,
        findBids,
        projectBids,
        averageBid,
        getAverageBid,
        updateBid,
        deleteBid,
        setUserBid,
        awardBid,
        unawardBid,
        awardedBids,
        unawardedBids,
        actionLoading: actionLoading
      }}
    >
      <>
        {notificationContext}
        {children}
      </>
    </BiddingContext.Provider>
  )
}

export { BiddingContextProvider, useBiddingContext }
