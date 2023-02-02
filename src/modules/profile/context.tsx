import React, { createContext, useState } from 'react'

interface Istate 
{
    bannerphoto,
    profilephoto
}

export const ProfileContext = createContext({
    updateBannerPhoto: (file: File) => {},
    updateMiniProfile: () => {}
})

interface IProps {
    children: React.ReactNode;
}

interface IPictureInput
{
  inputRef: React.MutableRefObject<HTMLInputElement>,
  inputButton: string,
  loader: string,
  imgPreview: string,
  inputForm: React.MutableRefObject<HTMLFormElement>
}

export const ProfileContextProvider: React.FC<IProps> = ({children}) =>
{
    let args: IPictureInput
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
