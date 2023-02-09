import { ApButton, CustomOutlineButton } from "@/src/components/button";
import { EditIcon } from "@/src/components/icons/customIcons";
import { ApModal } from "@/src/components/modal";
import React, { useState } from "react";
import { IProfile } from "../model";
import { EditProfileInfo } from "./edit";
import { Divider, Form, Radio, Skeleton, Space, Switch } from 'antd';

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
            <div className="test-user-pic h-80 w-80 bg-center bg-cover rounded"></div>
            :  <Skeleton.Image style={{ height: '320px', width: '320px' }} active />
          }

          {
            profile?.professionalHeadline ?
            <div className="ml-3 flex flex-col justify-between">
            <div>
              <div className="flex items-end">
                <h1 className="text-2xl text-skin-inverted font-bold">Paul A.</h1>
                <div className="flex items-center">
                  <p className="ml-2 text-lg text-gray-400">
                    paulandy32@gmail.com
                  </p>
                  <div className="bg-green-500 rounded-full h-2 w-2 ml-3"></div>
                </div>
              </div>
              
              <p className="text-base mt-1 text-skin-inverted">
                Frontend And Backend Developer
              </p>
              <div className="mt-3 text-base">
                <div className="flex">
                  <p className="mr-4 text-skin-inverted">
                    <span className="text-green-500 font-bold">N/A</span> Open
                    Projects
                  </p>
                  <p className="text-skin-inverted">
                    <span className="text-green-500 font-bold">N/A</span> Active
                    Projects
                  </p>
                </div>

                <div className="flex mt-3">
                  <p className="mr-4 text-skin-inverted">
                    <span className="text-green-500 font-bold">N/A</span> Past
                    Projects
                  </p>
                  <p className="text-skin-inverted">
                    <span className="text-green-500 font-bold">N/A</span> Total
                    Projects
                  </p>
                </div>
              </div>
            </div>

            <div className="text-base">
              <p className="mb-2 text-skin-inverted">My best skill, is typing, and am also into game development<br/>with unity for both PC and Mobile, and I also make designs.</p>
              <p className="mb-1 text-skin-inverted">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="cs5:w-6 cs5:h-6 w-5 h-5 inline-block mr-2 text-skin-muted"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                    clip-rule="evenodd"
                  />
                </svg>
                It's currently 3:12 PM here
              </p>
              <p className="mb-1 text-skin-inverted">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="cs5:w-6 cs5:h-6 w-5 h-5 inline-block mr-2 text-skin-muted"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clip-rule="evenodd"
                  />
                </svg>
                Joined January 27, 2022
              </p>
              <p className="text-skin-inverted">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="cs5:w-6 cs5:h-6 w-5 h-5 inline-block mr-2 text-skin-muted"
                >
                  <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                </svg>
                0 Recommendations
              </p>
            </div>
            </div>
            : <div className="mt-1 ml-5 w-full"><Skeleton active paragraph={{ rows: 9 }} /></div>
          }
        </div>

          {
            profile?.hourlyRate ?
            <div className="absolute p-5 bottom-0 top-0 right-0 flex gap-3 flex-col justify-between items-end mt-0">
              <ApButton
                onClick={() => setModal({ open: true })}
                className='py-2 flex bg-skin-accent text-white rounded items-center p-3 justify-center gap-2'
              >
                Edit Profile
                <EditIcon/>
              </ApButton>
              
                  <div className="text-right text-base">
                  <p className="mb-1 text-skin-inverted">Abuja, Nigeria</p>
                  <p className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-green-500"
                    >
                      <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
                      <path
                        fill-rule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-skin-inverted">$70 USD / Hour</span>
                  </p>
                  </div>
            </div>
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
