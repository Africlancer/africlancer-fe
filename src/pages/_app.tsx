import { ApolloProvider} from "@apollo/client";
import { useLayoutEffect, useState } from "react";
import { apolloClient } from "../ApolloClient";
import { ApUtilityBtn } from "../components/utilitybtn";
import { AuthContextProvider } from "../modules/auth/context";
import { ProfileContextProvider } from "../modules/profile/context";
import "../styles/global.css";
import { SessionProvider } from "next-auth/react"

const MyApp = ({ Component, pageProps }: any) => {

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
    <SessionProvider session={pageProps.session}>
          <ApolloProvider client={apolloClient}>
          <AuthContextProvider>
            <ProfileContextProvider>
              <div className="page">
              <Component {...pageProps} />
              {/* <ApUtilityBtn/> */}
              </div>
            </ProfileContextProvider>
          </AuthContextProvider>
        </ApolloProvider>
    </SessionProvider>
  );
};

export default MyApp;
