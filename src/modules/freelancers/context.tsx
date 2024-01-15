import React, { useState } from 'react'
import { useFetchAllFreelancers, useFetchFreelancersFilter } from './gql/query'
import useApNotification from '@/src/hooks/notification'

interface IFreelancersState {
  fetchAllFreelancers: (query) => void
  fetchFreelancersFilter: (query, fullSearch) => void
  freelancers: any
}

const FreelancersContext = React.createContext<IFreelancersState>({
  fetchAllFreelancers(query) {},
  fetchFreelancersFilter(query, fullSearch) {},
  freelancers: null,
})

const useFreelancersContext = () => {
  const context = React.useContext(FreelancersContext)
  if (context === undefined) throw new Error('Context does not exist')
  return context
}

interface IProps {
  children: React.ReactNode
}

const FreelancersContextProvider: React.FC<IProps> = ({ children }) => {
  const fetchAllFreelancersQuery = useFetchAllFreelancers()
  const fetchFreelancersFilterQuery = useFetchFreelancersFilter()
  const { errorMsg, notificationContext, successMsg } = useApNotification()
  const [freelancers, setFreelancers] = useState<any>(null)

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

  return (
    <FreelancersContext.Provider
      value={{
        fetchAllFreelancers,
        freelancers,
        fetchFreelancersFilter,
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