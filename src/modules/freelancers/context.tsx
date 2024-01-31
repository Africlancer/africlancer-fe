import React, { useState } from 'react'
import useFreelancerQuery, { useFetchAllFreelancers, useFetchFreelancersFilter } from './gql/query'
import useApNotification from '@/src/hooks/notification'
import { IQueryFreelancerInput } from './model'
import { IProfile } from '../profile/model'

interface IFreelancersState {
  fetchAllFreelancers: (query) => void
  fetchFreelancersFilter: (query, fullSearch) => void
  findFreelancers: (query: IQueryFreelancerInput, fullSearch?: boolean, userId?: string) => Promise<any>
  freelancers: IProfile[]
  loading: boolean
}

const FreelancersContext = React.createContext<IFreelancersState>({
  fetchAllFreelancers(query) {},
  fetchFreelancersFilter(query, fullSearch) {},
  findFreelancers(query, fullSearch, userId) {},
  freelancers: [],
  loading: true
} as any)

const useFreelancersContext = () => {
  const context = React.useContext(FreelancersContext)
  if (context === undefined) throw new Error('Context does not exist')
  return context
}

interface IProps {
  children: React.ReactNode
}

const FreelancersContextProvider: React.FC<IProps> = ({ children }) => {
  const freelancerQuery = useFreelancerQuery();
  const [freelancers, setFreelancers] = useState<IProfile[]>([])

  const fetchAllFreelancersQuery = useFetchAllFreelancers()
  const fetchFreelancersFilterQuery = useFetchFreelancersFilter()
  const { errorMsg, notificationContext, successMsg } = useApNotification()

  const fetchAllFreelancers = (query) => {
    fetchAllFreelancersQuery[0]({
      variables: {
        query,
      },
    })
      .then((res) => {
        setFreelancers(res.data?.findUsers)
      })
      .catch((err) => console.log(err))
  }

  const fetchFreelancersFilter = (query, fullSearch) => {
    fetchFreelancersFilterQuery[0]({
      variables: {
        query,
        fullSearch,
      },
    })
      .then((res) => {
        setFreelancers(res.data?.findProfilesFilter)
      })
      .catch((err) => console.log(err))
  }

  const findFreelancers = async (query: IQueryFreelancerInput, fullSearch?: boolean, userId?: string): Promise<any> => {
    return new Promise<void>((resolve, reject) => {
      freelancerQuery.findFreelancersFilterQ[0]({ variables: { query, fullSearch } })
      .then((res) => {
        // setFreelancers(res?.data?.findProfilesFilter.filter((item) => item.userID != userId))
        setFreelancers(res?.data?.findProfilesFilter)
        resolve(res?.data?.findProfilesFilter)
      }).catch((err) => {
        errorMsg('Error', err)
        reject(err)
      })
    })
  }

  return (
    <FreelancersContext.Provider
      value={{
        findFreelancers,
        fetchAllFreelancers,
        freelancers,
        fetchFreelancersFilter,
        loading: freelancerQuery.loading
      }}
    >
      <>
        {notificationContext}
        {children}
      </>
    </FreelancersContext.Provider>
  )
}

export { FreelancersContextProvider, useFreelancersContext }