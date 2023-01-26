import { CustomButton } from "@/src/components/button";
import { Footer } from "@/src/components/footer";
import { Navbar, SubMenu } from "@/src/components/modal";
import React, { useState } from "react";
import {
  Reviews, Portfolioitems, Education, Experience, Qualifications, Publications,
  Verification, BannerPhoto, Certifications, TopSkills, SimilarFreelancers, SimilarShowcases
} from "./components";
import { ProfileInfo } from "./info/view";
import type { MenuProps } from 'antd';


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
      <div className="relative pt-16 pb-56">
      <SubMenu items={items} currentPage={'improve-profile'}/>
        <BannerPhoto/> 

        <div className="-translate-y-44 mt-20 w-full">
          <div className="px-6 pb-8">
          <CustomButton size='large'>
            View Client Profile
          </CustomButton>
          <div className="cs:gap-8 cs:grid cs:grid-cols-3 w-full grid mt-4">
            <div className="col-span-2 grid gap-8">
              <ProfileInfo profile={null} />
              <Portfolioitems/>
              <Reviews/>
              <Experience/>
              <Education/>
              <Qualifications/>
              <Publications/>
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
    <Footer/>
    </div>
  );
};
