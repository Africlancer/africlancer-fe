import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getSession } from "next-auth/react";

console.log(process.env.GRAPHQL_URL, " process.env.GRAPHQL_URL");

const httpLink = createHttpLink({
  uri: "http://159.223.91.232:6110/graphql",
});

const authLink = setContext(async (_, { headers }) => {
  const session: any = await getSession();
  // get the authentication token from local storage if it exists
  //return the headers to the context so httpLink can read them
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
