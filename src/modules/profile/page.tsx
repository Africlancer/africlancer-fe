import { Navbar, SubMenu } from "@/src/components/modal";
import React from "react";
import {
  Reviews, Portfolioitems, Education, Experience, Qualifications, Publications,
  Verification, BannerPhoto, Certifications, TopSkills, SimilarFreelancers, SimilarShowcases
} from "./components";
import { ProfileInfo } from "./info/view";

export const ProfilePage = () => {
  return (
    <div className="profile-page">
      <Navbar/>
      <div className="relative pt-16">
      <SubMenu/>
        <BannerPhoto/> 

        <div className="px-6 pb-8 absolute top-80 mt-20">
          <button className="text-white p-2 rounded bg-green-500 mb-3">
            View Client Profile
          </button>
          <div className="gap-8 grid grid-cols-3">
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
  );
};
