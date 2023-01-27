import { ApolloProvider} from "@apollo/client";
import { useLayoutEffect } from "react";
import { apolloClient } from "../ApolloClient";
import { AuthContextProvider } from "../modules/auth/context";
import { ProfileContextProvider } from "../modules/profile/context";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }: any) => {

  useLayoutEffect(() => 
  {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) 
    {
      document.querySelector('.page').classList.add('theme-dark')
      console.log('dark theme')
    } 
    else 
    {
      document.querySelector('.page').classList.remove('theme-dark')
      console.log('light theme')
    }
  }, [])

  return (
    <ApolloProvider client={apolloClient}>
      <AuthContextProvider>
        <ProfileContextProvider>
          <div className="page">
          <Component {...pageProps} />
          </div>
        </ProfileContextProvider>
      </AuthContextProvider>
    </ApolloProvider>
  );
};

export default MyApp;
