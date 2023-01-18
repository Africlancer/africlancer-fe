import React from 'react'
import { IProfile } from '../model'


interface IProps{
  profile: IProfile;
}
export const EditProfileInfo: React.FC<IProps> = ({profile}) => {
  return (
    <div>EditProfileInfo</div>
  )
}
