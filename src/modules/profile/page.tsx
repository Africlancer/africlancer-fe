import { ApButton } from "@/src/components/button";
import { Footer } from "@/src/components/footer";
import { Navbar, SubMenu } from "@/src/components/modal";
import React, { useState } from "react";
import {
  Reviews, Portfolioitems,  
  Verification, BannerPhoto, Certifications, TopSkills, SimilarFreelancers, SimilarShowcases
} from "./components";
import { ProfileInfo } from "./info/view";
import { Experience } from "./experience/view";
import  { MenuProps } from 'antd';
import { Education } from "./education/view";
import { Publication } from "./publication/view";
import { Qualifications } from "./qualification/view";


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

  return (
    <div className="h-full relative">
    <div className="profile-page relative">
      <Navbar/>
      <SubMenu items={items} currentPage='improve-profile'/>

      <div className="relative pt-24">
        <BannerPhoto/> 
        <div className="-translate-y-44 mt-20 w-full">
          <div className="px-6 pb-8">
          <ApButton 
            onClick={() => {}}
          >
            View Client Profile
          </ApButton>
          <div className="cs:gap-8 cs:grid cs:grid-cols-3 w-full grid mt-4">
            <div className="col-span-2 grid gap-8">
              <ProfileInfo profile={null} />
              <Portfolioitems/>
              <Reviews/>
              <Experience/>
              <Education/>
              <Qualifications/>
              <Publication/>
            </div>

            <div className="flex flex-col gap-8">
              <Verification />
              <Certifications/>
              <TopSkills/>
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
