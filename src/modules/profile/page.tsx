import { ApButton } from '@/src/components/button'
import { Footer } from '@/src/components/footer'
import { ApModal, Navbar, SubMenu } from '@/src/components/modal'
import React, { useContext, useEffect, useState } from 'react'
import {
  ProfileInfo,
  Experience,
  Publication,
  Banner,
  Qualification,
  Reviews,
  Portfolioitems,
  Verification,
  Certifications,
  SimilarFreelancers,
  SimilarShowcases,
  Skills,
  Education,
  EditProfileInfo,
  EditExperience,
  EditEducation,
  EditQualification,
  EditPublication,
  EditBannerPhoto,
} from './components'
import { MenuProps } from 'antd'
import { useQuery } from '@apollo/client'
import { FIND_ONE_PROFILE } from './gql/query'
import { useProfileContext } from './context'
import { useSession } from 'next-auth/react'
import { IProfileModal } from './model'

export const ProfilePage = () => {
  const { profile, findProfile, loading, actionLoading } = useProfileContext()
  const [modal, setModal] = useState<IProfileModal>({ 
    open: false,
    type: "info",
    width: 900,
  })

  useEffect(() => {
    findProfile()
  },[])
  
  const onDismiss = () => {
    setModal({open: false, width: modal?.width})
  }

  return (
    <>    
      <div className="relative">
        <Banner onEdit={() => setModal({open: true, type: "banner", width: 'auto' as any})} />
        <div className="-translate-y-44 mt-20 w-full">
          <div className="px-6 pb-8">
            <ApButton
              onClick={() => {}}
              className="py-2 flex bg-skin-accent text-white rounded items-center p-3 justify-center gap-2"
            >
              View Client Profile
            </ApButton>
            <div className="cs:gap-8 cs:grid cs:grid-cols-3 w-full grid mt-4">
              <div className="col-span-2 grid gap-8">
                <ProfileInfo onEdit={() => setModal({open: true, type: "info", width: 970})}/>
                <Experience onEdit={(experience) => setModal({open: true, type: "experience", width: 970, experience})} />
                <Education onEdit={(education) => setModal({open: true, type: "education", width: 970, education})} />
                <Qualification onEdit={(qualification) => setModal({open: true, type: "qualification", width: 970, qualification})} />
                <Publication onEdit={(publication) => setModal({open: true, type: "publication", width: 970, publication})} />
                <Portfolioitems />
                <Reviews />
              </div>

              <div className="flex flex-col gap-8">
                <Verification />
                <Certifications />
                {/* <Skills skills={profile?.skills} /> */}
                <SimilarFreelancers />
                <SimilarShowcases />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ApModal
        open={modal?.open}
        onDismiss={() => {
          if(actionLoading == false){
            setModal({ open: false, width: modal?.width })
          }
        }}
        width={modal?.width}
      >
        {modal?.type == "banner" && <EditBannerPhoto onDismiss={onDismiss}/>}
        {modal?.type == "info" && <EditProfileInfo onDismiss={onDismiss}/>}
        {modal?.type == "experience" && <EditExperience experience={modal?.experience} onDismiss={onDismiss}/>}
        {modal?.type == "education" && <EditEducation education={modal?.education} onDismiss={onDismiss}/>}
        {modal?.type == "qualification" && <EditQualification qualification={modal?.qualification} onDismiss={onDismiss}/>}
        {modal?.type == "publication" && <EditPublication publication={modal?.publication} onDismiss={onDismiss}/>}
      </ApModal>
    </>
  )
}