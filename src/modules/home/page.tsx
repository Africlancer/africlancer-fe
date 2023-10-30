import React from "react";
import { NavbarAuth, SubMenu } from "@/src/components/modal";
import { Header, SecondSection, ThirdSection } from "./components";
import { Footer } from "@/src/components/footer";
import type { MenuProps } from "antd";
import Image from "next/image";
import { ProjectsPreview } from "./components/projectspreview";
import { getSession, useSession } from "next-auth/react";

export const HomePage = () => {

  const session = useSession();

  console.log(session);


  const items: MenuProps["items"] = [
    {
      label: "Home",
      key: "home",
    },
    {
      label: <p className="text-skin-inverted">Find Jobs</p>,
      key: "find-jobs",
    },
    {
      label: "Hire Freelancers",
      key: "hire-freelancers",
    },
    {
      label: "Get Ideas",
      key: "get-ideas",
    },
    {
      label: "About",
      key: "about",
    },
    {
      label: "Resources",
      key: "resources",
    },
    {
      label: "How It Works",
      key: "how-it-works",
    },
    {
      label: "Browse Jobs",
      key: "browse-jobs",
    },
  ];

  const theme = () => {
    // document.querySelector(".page").classList.toggle("theme-dark");
  };

  return (
    <div className="">
      <div className="bg-skin-alt relative">
        <NavbarAuth />
        <SubMenu items={items} currentPage="home" />
        <div className="relative pt-24">
          <Header />
          {/* <button type='button' onClick={theme}>theme</button> */}
          <div className="flex flex-col gap-10">
            <SecondSection />
            <ThirdSection />
            <ProjectsPreview />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

{
  /* <button onClick={theme} title="Contact Sale" className="fixed z-50 bottom-10 right-0 bg-skin-primary w-16
  h-14 rounded-tl-full rounded-bl-full drop-shadow-lg flex justify-center items-center text-white text-4xl">
    <Image src='/sun.png' className='hidden' height={40} width={40} alt='Light Picture'/>
    <Image src='/night.png' className='' height={40} width={40} alt='Light Picture'/>
  </button> */
}
