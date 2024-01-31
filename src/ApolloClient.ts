import { split, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { getSession } from 'next-auth/react'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import { getMainDefinition } from '@apollo/client/utilities'
import { environment } from './environment'
import { GraphQLClient } from 'graphql-request'

// console.log(process.env.GRAPHQL_URL, " process.env.GRAPHQL_URL");

const httpLink = createHttpLink({
  uri: environment.Uri.Graphql
})

const wsLink =
  typeof window !== 'undefined'
    ? new GraphQLWsLink(
        createClient({
          url: 'ws://localhost:6110/graphql',
        }),
      )
    : null

const authLink = setContext(async (_, { headers }) => {
  const session: any = await getSession()
  // get the authentication token from local storage if it exists
  //return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: session?.token ? `Bearer ${session?.token}` : '',
      // refresh_token: session?.refresh_token,
    },
  }
})

const mainLink = authLink.concat(httpLink)

const splitLink =
  typeof window !== 'undefined' && wsLink != null
    ? split(
        ({ query }) => {
          const def = getMainDefinition(query)
          return def.kind === 'OperationDefinition' && def.operation === 'subscription'
        },
        wsLink,
        mainLink,
      )
    : mainLink

export const apolloClient = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
})

export const gqlClient = new GraphQLClient(environment.Uri.Graphql, {
  credentials: "include",
});


// const wsLink = new GraphQLWsLink(createClient({
//   url: 'ws://localhost:4000/subscriptions',
// }));

// const splitLink = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === 'OperationDefinition' &&
//       definition.operation === 'subscription'
//     );
//   },
//   wsLink,
//   mainLink,
// );
