import React, { createContext, useState } from 'react'
import { useUpdateProfile } from './gql/query'
import { IProfile } from './model'

interface IProfileState {
  //loading: boolean;
  profile: any
  updateProfile: (profile: IProfile) => Promise<void>
  setProfile: any
}

const ProfileContext = createContext<IProfileState>({
  //loading: false,
  profile: null,
  updateProfile(profile: IProfile) {
    return null as any
  },
  setProfile: null,
})

const useProfileContext = () => {
  const context = React.useContext(ProfileContext)
  if (context === undefined) throw new Error('contenxt doest not exist')
  return context
}

interface IProps {
  notificationMsg: any
  children: React.ReactNode
}

const ProfileContextProvider: React.FC<IProps> = ({ children, notificationMsg }) => {
  const createUpdateProfileQuery = useUpdateProfile((rs) => {})
  const [profile, setProfile] = useState<IProfile>()

  const updateProfile = async (profile: IProfile) => {
    createUpdateProfileQuery[0]({ variables: { profile } }).then((rs) => {
      console.log(rs)
    })
  }

  return (
    <ProfileContext.Provider value={{ setProfile, updateProfile, profile }}>
      {children}
    </ProfileContext.Provider>
  )
}

export { useProfileContext, ProfileContextProvider }
