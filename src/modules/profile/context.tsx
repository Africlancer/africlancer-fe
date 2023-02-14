import React, { createContext, useState } from 'react'
import { IProfile } from './model'

export const ProfileContext = createContext({
    profile: null,
    updateProfile: (profile: IProfile) =>  {}
})

interface IProps 
{
    children: React.ReactNode;
}

export const ProfileContextProvider: React.FC<IProps> = ({children}) =>
{
    const [profile, setProfile] = useState<IProfile>()
    const updateProfile = (profile: IProfile) => 
    {
        setProfile(profile)
    }
    
    return(
        <ProfileContext.Provider
            value={{ updateProfile, profile }} 
        >
            {children}
        </ProfileContext.Provider>
    )
}
