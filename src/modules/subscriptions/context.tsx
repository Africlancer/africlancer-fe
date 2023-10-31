import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { LoadingOutlined } from '@ant-design/icons'
import { useSession } from 'next-auth/react'
import { useLazyQuery, useSubscription } from '@apollo/client'
import { NEW_PROJECT_SUBSCRIPTION } from './gql/query'

interface ISubscriptionState {}

const SubscriptionContext = React.createContext<ISubscriptionState>({})

const useSubscriptionContext = () => {
  const context = React.useContext(SubscriptionContext)
  if (context === undefined) throw new Error('context doest not exist')
  return context
}

interface IProps {
  notificationMsg?: any
  children: React.ReactNode
}

const SubscriptionContextProvider: React.FC<IProps> = ({ children }) => {
  const rs = useSubscription(NEW_PROJECT_SUBSCRIPTION)
  console.log(rs)

  return <SubscriptionContext.Provider value={{}}>{children}</SubscriptionContext.Provider>
}

export { SubscriptionContextProvider, SubscriptionContext }
