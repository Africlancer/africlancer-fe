import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "../ApolloClient";
import { AuthContextProvider } from "../modules/auth/context";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }: any) => {
  return (
    <ApolloProvider client={apolloClient}>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </ApolloProvider>
  );
};

export default MyApp;
