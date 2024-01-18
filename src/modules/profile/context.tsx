import React, { createContext, useState } from 'react'
import useProfileQuery, { useUpdateProfile } from './gql/query'
import { IEducation, IExperience, IProfile, IPublication, IQualification, IUpdateProfileInput } from './model'
import useApNotification from '@/src/hooks/notification'

interface IProfileState {
  deleteExperienceLoading: boolean
  deleteEducationLoading: boolean
  deletePublicationLoading: boolean
  deleteQualificationLoading: boolean
  loading: boolean;
  actionLoading: boolean
  avatarLoading: boolean
  profile: IProfile
  avatar: string
  setProfile: any
  updateProfile: (profile: IProfile) => Promise<any>
  findProfile: () => Promise<any>
  findUserAvatar: () => Promise<any>
  addOrUpdatePublication: (publication: IPublication) => Promise<any>
  addOrUpdateQualification: (qualification: IQualification) => Promise<any>
  addOrUpdateEducation: (education: IEducation) => Promise<any>
  addOrUpdateExperience: (experience: IExperience) => Promise<any>
  deleteExperience: (experienceID: string) => Promise<any>
  deleteEducation: (educationID: string) => Promise<any>
  deletePublication: (publicationID: string) => Promise<any>
  deleteQualification: (qualificationID: string) => Promise<any>
}

const ProfileContext = createContext<IProfileState>({
  loading: true,
  avatarLoading: true,
  actionLoading: false,
  deleteExperienceLoading: false,
  deleteEducationLoading: false,
  deletePublicationLoading: false,
  deleteQualificationLoading: false,
  profile: null,
  avatar: null,
  updateProfile(profile: IProfile) { return null as any },
  findProfile() { return null as any },
  findUserAvatar() { return null as any },
  addOrUpdatePublication(publication: IPublication) { return null as any },
  addOrUpdateQualification(qualification: IQualification) { return null as any },
  addOrUpdateEducation(education: IEducation) { return null as any },
  addOrUpdateExperience(experience: IExperience) { return null as any },
  deleteExperience(experienceID: string) { return null as any },
  deleteEducation(educationID: string) { return null as any },
  deletePublication(publicationID: string) { return null as any },
  deleteQualification(qualificationID: string) { return null as any },
  setProfile: null,
} as any)

const useProfileContext = () => {
  const context = React.useContext(ProfileContext)
  if (context === undefined) throw new Error('contenxt doest not exist')
  return context
}

interface IProps {
  children: React.ReactNode
}

const ProfileContextProvider: React.FC<IProps> = ({ children }) => {
  const profileQuery = useProfileQuery();
  const [profile, setProfile] = useState<IProfile>()
  const [avatar, setAvatar] = useState<string>()
  const { errorMsg, notificationContext, successMsg } = useApNotification()

  const findProfile = async (): Promise<any> => {
    return new Promise<void>((resolve, reject) => {
      profileQuery.findOneProfileQ[0]()
      .then((res) => {
        setProfile(res?.data?.findOneProfile)
        resolve(res?.data?.findOneProfile)
      }).catch((err) => {
        reject(err)
      })
    })
  }

  const findUserAvatar = async (): Promise<any> => {
    return new Promise<void>((resolve, reject) => {
      profileQuery.findUserAvatarQ[0]()
      .then((res) => {
        setAvatar(res?.data?.findOneProfile?.avatar)
        resolve(res?.data?.findOneProfile?.avatar)
      }).catch((err) => {
        reject(err)
      })
    })
  }

  const findProfile2 = async (): Promise<any> => {
    return new Promise<void>((resolve, reject) => {
      profileQuery.findOneProfileQ2[0]()
      .then((res) => {
        setProfile(res?.data?.findOneProfile)
        resolve(res?.data?.findOneProfile)
      }).catch((err) => {
        reject(err)
      })
    })
  }

  const updateProfile = async (profile: IUpdateProfileInput): Promise<any> => {
    return new Promise<void>((resolve, reject) => {
      profileQuery.updateProfileQ[0]({ variables: { profile } })
      .then((res) => {
        findProfile2()
        successMsg('Success', 'Profile Updated Successfully')
        resolve(res?.data?.updateProfile)
      }).catch((err) => {
        errorMsg('Error', err)
        reject(err)
      })
    })
  }

  const addOrUpdatePublication = async (publication: IPublication): Promise<any> => {
    return new Promise<void>((resolve, reject) => {
      profileQuery.addOrUpdatePublicationQ[0]({ variables: { publication } })
      .then((res) => {
        findProfile2()
        successMsg('Success', publication?._id ? 'Publication Updated Successfully' 
        : 'Publication Created Successfully')
        resolve(res?.data?.addOrUpdatePublication)
      }).catch((err) => {
        errorMsg('Error', err)
        reject(err)
      })
    })
  } 

  const addOrUpdateQualification = async (qualification: IQualification): Promise<any> => {
    return new Promise<void>((resolve, reject) => {
      profileQuery.addOrUpdateQualificationQ[0]({ variables: { qualification } })
      .then((res) => {
        findProfile2()
        successMsg('Success', qualification?._id ? 'Qualification Updated Successfully' 
        : 'Qualification Created Successfully')
        resolve(res?.data?.addOrUpdateQualification)
      }).catch((err) => {
        errorMsg('Error', err)
        reject(err)
      })
    })
  } 

  const addOrUpdateEducation = async (education: IEducation): Promise<any> => {
    return new Promise<void>((resolve, reject) => {
      profileQuery.addOrUpdateEducationQ[0]({ variables: { education } })
      .then((res) => {
        findProfile2()
        successMsg('Success', education?._id ? 'Education Updated Successfully' 
        : 'Education Created Successfully')
        resolve(res?.data?.addOrUpdateEducation)
      }).catch((err) => {
        errorMsg('Error', err)
        reject(err)
      })
    })
  } 

  const addOrUpdateExperience = async (experience: IExperience): Promise<any> => {
    return new Promise<void>((resolve, reject) => {
      profileQuery.addOrUpdateExperienceQ[0]({ variables: { experience } })
      .then((res) => {
        findProfile2()
        successMsg('Success', experience?._id ? 'Experience Updated Successfully' 
        : 'Experience Created Successfully')
        // let p = profile
        // setProfile({
        //   ...p,
        //   experience: experience._id ?
        //   p?.experience?.map((item) => {
        //     if(item._id == experience._id){
        //       return experience
        //     } else {
        //       return item
        //     }
        //   }) : [...p?.experience as any, experience]
        // })
        resolve(res?.data?.addOrUpdateExperience)
      }).catch((err) => {
        errorMsg('Error', err)
        reject(err)
      })
    })
  } 

  const deleteExperience = async (experienceID: string): Promise<any> => {
    return new Promise<void>((resolve, reject) => {
      profileQuery.deleteExperienceQ[0]({ variables: { experienceID } })
      .then((res) => {
        successMsg('Success', 'Experience Deleted Successfully')
        let p = profile
        setProfile({
          ...p,
          experience: p?.experience?.filter((item) => item._id != experienceID)
        })
        resolve(res?.data?.deleteExperience)
      }).catch((err) => {
        errorMsg('Error', err)
        reject(err)
      })
    })
  } 

  const deleteEducation = async (educationID: string): Promise<any> => {
    return new Promise<void>((resolve, reject) => {
      profileQuery.deleteEducationQ[0]({ variables: { educationID } })
      .then((res) => {
        successMsg('Success', 'Education Deleted Successfully')
        let p = profile
        setProfile({
          ...p,
          education: p?.education?.filter((item) => item._id != educationID)
        })
        resolve(res?.data?.deleteEducation)
      }).catch((err) => {
        errorMsg('Error', err)
        reject(err)
      })
    })
  }

  const deletePublication = async (publicationID: string): Promise<any> => {
    return new Promise<void>((resolve, reject) => {
      profileQuery.deletePublicationQ[0]({ variables: { publicationID } })
      .then((res) => {
        successMsg('Success', 'Publication Deleted Successfully')
        let p = profile
        setProfile({
          ...p,
          publication: p?.publication?.filter((item) => item._id != publicationID)
        })
        resolve(res?.data?.deletePublication)
      }).catch((err) => {
        errorMsg('Error', err)
        reject(err)
      })
    })
  }

  const deleteQualification = async (qualificationID: string): Promise<any> => {
    return new Promise<void>((resolve, reject) => {
      profileQuery.deleteQualificationQ[0]({ variables: { qualificationID } })
      .then((res) => {
        successMsg('Success', 'Qualification Deleted Successfully')
        let p = profile
        setProfile({
          ...p,
          qualification: p?.qualification?.filter((item) => item._id != qualificationID)
        })
        resolve(res?.data?.deleteQualification)
      }).catch((err) => {
        errorMsg('Error', err)
        reject(err)
      })
    })
  }

  return (
    <ProfileContext.Provider 
      value={{
        avatar,
        findUserAvatar,
        deleteExperience,
        deleteEducation,
        deletePublication,
        deleteQualification,
        setProfile, 
        updateProfile, 
        profile,
        findProfile,
        addOrUpdatePublication,
        addOrUpdateQualification,
        addOrUpdateEducation,
        addOrUpdateExperience,

        loading: profileQuery.loading,
        actionLoading: profileQuery.actionLoading,
        avatarLoading: profileQuery.avatarLoading,
        deleteExperienceLoading: profileQuery.deleteExperienceQ[1].loading,
        deleteEducationLoading: profileQuery.deleteEducationQ[1].loading,
        deletePublicationLoading: profileQuery.deletePublicationQ[1].loading,
        deleteQualificationLoading: profileQuery.deleteQualificationQ[1].loading,
      } as any}
    >
      <>
        {notificationContext}
        {children}
      </>
    </ProfileContext.Provider>
  )
}

export { useProfileContext, ProfileContextProvider }