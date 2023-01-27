import { ApolloProvider} from "@apollo/client";
import { apolloClient } from "../ApolloClient";
import { AuthContextProvider } from "../modules/auth/context";
import { ProfileContextProvider } from "../modules/profile/context";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }: any) => {
  return (
    <ApolloProvider client={apolloClient}>
      <AuthContextProvider>
        <ProfileContextProvider>
        <Component {...pageProps} />
        </ProfileContextProvider>
      </AuthContextProvider>
    </ApolloProvider>
  );
};

export default MyApp;
