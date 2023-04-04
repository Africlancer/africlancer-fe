import { ApButton } from "@/src/components/button";
import { Footer } from "@/src/components/footer";
import { Navbar, SubMenu } from "@/src/components/modal";
import React, { useContext, useEffect } from "react";
import { ProfileInfo, Experience, Publication, Banner, Qualifications, Reviews, 
Portfolioitems, Verification,  Certifications, SimilarFreelancers, SimilarShowcases,
Skills, Education } from "./components";
import  { MenuProps } from 'antd';
import { useQuery } from "@apollo/client";
import { FIND_ONE_PROFILE } from "./gql/query";
import { ProfileContext } from "./context";
import { useSession } from "next-auth/react";


export const ProfilePage = () => {
  const items: MenuProps['items'] = [
    {
      label: 'Improve Profile',
      key: 'improve-profile',
    },
    {
      label: 'Get Certified',
      key: 'get-certified',
    },
    {
      label: 'Promote Profile',
      key: 'promote-profile',
    },
    {
      label: 'My Rewards',
      key: 'my-rewards',
    }
  ];
  
  const sess = useSession()
  const user: any = sess.data?.user

  const { profile, updateProfile } = useContext(ProfileContext)
  const { loading, error, data } = useQuery(FIND_ONE_PROFILE);
  
  console.log(data)
  useEffect(() => {
    if (loading) { console.log('Loading...') }
    else if (error) { console.log(`Error! ${error.message}`) }
    else { updateProfile(data.findOneProfile) }
  })

  return (
    <div className="h-full relative bg-skin-alt">
      <div className="profile-page relative">
        <Navbar/>
        <SubMenu items={items} currentPage='improve-profile'/>

        <div className="relative pt-24">
          <Banner banner={profile?.banner}/> 
          <div className="-translate-y-44 mt-20 w-full">
            <div className="px-6 pb-8">
            <ApButton
              onClick={() => {}}
              className='py-2 flex bg-skin-accent text-white rounded items-center p-3 justify-center gap-2'
            >
              View Client Profile
            </ApButton>
            <div className="cs:gap-8 cs:grid cs:grid-cols-3 w-full grid mt-4">
              <div className="col-span-2 grid gap-8">
                <ProfileInfo profile={profile} />
                <Portfolioitems/>
                <Reviews/>
                <Experience experiences={profile?.experience}/>
                <Education educations={profile?.education}/>
                <Qualifications qualifications={profile?.qualification}/>
                <Publication publications={profile?.publication}/>
              </div>

              <div className="flex flex-col gap-8">
                <Verification />
                <Certifications/>
                <Skills/>
                <SimilarFreelancers/>
                <SimilarShowcases/>
              </div>
            </div>
            </div>
          </div>
        </div>

      </div>

      <div className="-mt-20">
        <Footer/>
      </div>
    </div>
  );
};
