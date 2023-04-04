import { ApolloProvider} from "@apollo/client";
import { useLayoutEffect, useState } from "react";
import { apolloClient } from "../ApolloClient";
import { ApUtilityBtn } from "../components/utilitybtn";
import { AuthContextProvider } from "../modules/auth/context";
import { ProfileContextProvider } from "../modules/profile/context";
import "../styles/global.css";
import { SessionProvider } from "next-auth/react"
import { ProjectContextProvider } from "../modules/projects/context";
import { BiddingContextProvider } from "../modules/bidding/context";
import { FreelancersContextProvider } from "../modules/freelancers/context";
import useApNotification from "../hooks/notification";

const MyApp = ({ Component, pageProps }: any) => {
  const { notificationContext, successMsg, errorMsg } = useApNotification();
  // useLayoutEffect(() => 
  // {
  //   const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  //   if (darkThemeMq.matches) 
  //   {
  //     document.querySelector('.page').classList.add('theme-dark')
  //   } 
  //   else 
  //   {
  //     document.querySelector('.page').classList.remove('theme-dark')
  //   }
  // }, [])

  return (
    <>
    {notificationContext}
      <SessionProvider session={pageProps.session}>
          <ApolloProvider client={apolloClient}>
          <AuthContextProvider>
            <ProjectContextProvider notificationMsg={{successMsg, errorMsg}}>
              <BiddingContextProvider notificationMsg={{successMsg, errorMsg}}>
                <ProfileContextProvider>
                  <FreelancersContextProvider>
                  <div className="page">
                  <Component {...pageProps}/>
                  {/* <ApUtilityBtn/> */}
                  </div>
                  </FreelancersContextProvider>
                </ProfileContextProvider>
              </BiddingContextProvider>
            </ProjectContextProvider>
          </AuthContextProvider>
        </ApolloProvider>
      </SessionProvider>
    </>
  );
};

export default MyApp;
