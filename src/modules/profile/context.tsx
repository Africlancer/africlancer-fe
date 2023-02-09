import React, { createContext, useState } from 'react'

export const ProfileContext = createContext({
    updateBannerPhoto: (file: File) => {},
    updateMiniProfile: () => {}
})

interface IProps {
    children: React.ReactNode;
}

export const ProfileContextProvider: React.FC<IProps> = ({children}) =>
{
    const updateBannerPhoto = (file: File) =>
    {
        console.log(file)
    }
    const updateMiniProfile = () =>
    {
        console.log()
    }
    
    return(
        <ProfileContext.Provider
            value={{updateBannerPhoto, updateMiniProfile}}
        >
            {children}
        </ProfileContext.Provider>
    )
}
