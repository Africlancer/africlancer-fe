import { ApolloClient, InMemoryCache } from "@apollo/client";

console.log(process.env.GRAPHQL_URL,'process.env.GRAPHQL_URL')
export const apolloClient = new ApolloClient({
  uri: "http://159.223.91.232:6110/graphql",//process.env.GRAPHQL_URL,
  cache: new InMemoryCache(),
});
