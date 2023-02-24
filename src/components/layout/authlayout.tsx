import { bgImages } from '@/src/modules/auth/model';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { ApGoogleIcon, ApFacebookIcon } from '../icons';
import { DoubleRightOutlined } from "@ant-design/icons";

interface IProps 
{
    children: React.ReactNode
    authPage: "signin" | "signup"
}

export const AuthPageLayout: React.FC<IProps> = ({ children, authPage }) => {
    const [bgImg, setBgImg] = useState<string>();
    useEffect(() => {
        let index = Math.floor(Math.random() * bgImages.length);
        let item = bgImages[index];
        setBgImg(item);
    }, []);
    
  return (
    <div
    className="overflow-auto w-full bg-center bg-cover bg-scroll sigin-bg"
    style={{ backgroundImage: `url(${bgImg})` }}
  >
    <div className="page-bg-overlay py-10 flex justify-between w-full bg-center bg-cover text-skin-inverted bg-overlay2">
      <div className="flex flex-col justify-center p-10">
        <h1 className="text-7xl font-bold mb-2 text-skin-base">
          Afric<span className="text-skin-accent">lancer</span>
        </h1>
        {
            authPage === "signin" ? (
             <div className="flex gap-2 text-xl">
                <p className="text-skin-base">No Account ?</p>
                <Link
                  href="/signup"
                  className="text-skin-accent flex items-center gap-1"
                >
                  Create New Account
                  <DoubleRightOutlined className="text-base" />
                </Link>
              </div>
            ) : (
                <div className="flex gap-2 text-xl">
                <p className="text-skin-base">Already Have an Account ?</p>
                <Link
                  href="/signin"
                  className="text-skin-accent flex items-center gap-1"
                >
                  Sign In
                  <DoubleRightOutlined className="text-base" />
                </Link>
              </div>
            )
        }

        <div className="flex mt-2 items-center gap-2">
          <p className="text-skin-base text-xl">Continue With - </p>
          <div className="bg-white rounded-full p-1.5">
              <ApGoogleIcon/>
          </div>
          <div className="bg-white rounded-full p-1.5 ml-1">
              <ApFacebookIcon/>
          </div>
        </div>
      </div>

    { children }
    </div>
  </div>
  )
}
