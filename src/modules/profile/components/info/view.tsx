import { ApModal } from "@/src/components/modal";
import React, { useState } from "react";
import { IProfile } from "../../model";
import { EditProfileInfo } from "./edit";
import { Image, Skeleton } from 'antd';
import { SectionThree, SectionTwo } from "./components";

interface IProps {
  profile: IProfile;
}

export const ProfileInfo: React.FC<IProps> = ({ profile }) => {
  const [modal, setModal] = useState<{ open: boolean }>();

  return (
    <>
      <div className="col-span-2 p-5 bg-skin-base shadow-xl w-full rounded-xl relative">
        <div className="flex w-full">
          {
            profile?.avatar ?
            <Image width='320px' src={profile.avatar}/>
            :  <Skeleton.Image style={{ height: '320px', width: '320px' }} active />
          }

          {
            profile?.professionalHeadline ?
            <SectionTwo summary={profile.summary} professionalHeadline={profile.professionalHeadline} recommendations={profile.recommendations}/>
            : <div className="mt-1 ml-5 w-full"><Skeleton active paragraph={{ rows: 9 }} /></div>
          }
        </div>

          {
            profile ?
            <SectionThree hourlyRate={ profile?.hourlyRate } setModal={ setModal }/>
            : <></>
        }
      </div>

      <ApModal
        open={modal?.open}
        onDismiss={() => {
          setModal({ open: false });
        }}
        width={970}
      >
        <EditProfileInfo profile={profile} />
      </ApModal>
    </>
  );
};
