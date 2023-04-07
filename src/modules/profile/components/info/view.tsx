import { ApModal } from "@/src/components/modal";
import React, { useState } from "react";
import { IProfile } from "../../model";
import { EditProfileInfo } from "./edit";
import { Image, Skeleton } from 'antd';
import { SectionThree, SectionTwo } from "./components";
import { useSession } from "next-auth/react";

interface IProps {
  profile: IProfile;
}

export const ProfileInfo: React.FC<IProps> = ({ profile }) => {
  const [modal, setModal] = useState<{ open: boolean }>();
  const sess: any = useSession()

  return (
    <>
      <div className="col-span-2 p-5 bg-skin-base shadow-xl w-full rounded-xl relative">
        <div className="flex w-full">
          {
            profile?.avatar ?
            <Image alt="" width='320px' height='320px' src={profile.avatar}/>
            :  <Skeleton.Image style={{ height: '320px', width: '320px' }} active />
          }

          {
            // profile?.professionalHeadline ?
            // <SectionTwo summary={profile.summary} professionalHeadline={profile.professionalHeadline}
            // recommendations={profile.recommendations} email={user?.email} name={user?.name} />
            // : <div className="mt-1 ml-5 w-full"><Skeleton active paragraph={{ rows: 9 }} /></div>
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
        <EditProfileInfo profile={profile} setModal={setModal} />
      </ApModal>
    </>
  );
};
