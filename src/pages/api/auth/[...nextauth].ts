import { environment } from '@/src/environment'
import { ClientError, gql, GraphQLClient } from 'graphql-request'
import jwt from 'jsonwebtoken'
import NextAuth from 'next-auth'
import { JWT } from 'next-auth/jwt'
import CredentialProvider from 'next-auth/providers/credentials'

const apolloClient = new GraphQLClient(environment.Uri.Graphql, {
  credentials: 'include',
})

const SIGN_IN = gql`
  mutation UserSignIn($user: UserSignIn!) {
    userSignIn(user: $user) {
      access_token
      refresh_token
      details {
        _id
        username
        email
        firstName
        lastName
      }
    }
  }
`

const FIND_USER = gql`
  query FindOneUser {
    findOneUser {
      _id
      username
      email
      firstName
      lastName
    }
  }
`

export default NextAuth({
  secret: process.env.TOKEN_SECRET,
  jwt: {
    secret: process.env.TOKEN_SECRET,
    async encode(data: any) {
      const { secret, token, user } = data
      const jwtClaims = {
        user: token.name,
        sub: token.sub,
        roles: ['user'],
      }

      const encodedToken = jwt.sign(jwtClaims, secret, {
        expiresIn: '60 days',
        algorithm: 'HS512',
      })
      return encodedToken
    },
    async decode(data: any) {
      const { secret, token, maxAge } = data
      const verify = jwt.verify(token, secret) as JWT

      return verify
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: parseInt(process.env.TOKEN_MAX_AGE as string),
  },
  callbacks: {
    async jwt(params: any) {
      const { token, user, account } = params
      // console.log(params);

      if (account?.accessToken) {
        token.accessToken = account.accessToken
      }
      if (user?.roles) {
        token.roles = user.roles.toString()
      }
      return token
    },
    async session(params: any) {
      const { session, token } = params
      // console.log(`Session 1, ${JSON.stringify(token)}`);
      const encodedToken = jwt.sign(
        JSON.stringify(token),
        'gie1msfkgjhmch28no26o2ovqhsj9e28' as any,
        {
          algorithm: 'HS256',
        },
      )
      // console.log(`Session 2, ${encodedToken}`);
      const user: any = session?.user?._id
        ? { account: session?.user }
        : await apolloClient
            .setHeader('authorization', `Bearer ${encodedToken}`)
            .request(FIND_USER)
      // console.log(user);

      // console.log(`Session 3, ${JSON.stringify(user)}`);
      session.id = token?.sub
      session.token = encodedToken
      // session.brandId = user?.user?.brandId;
      session.user = { ...user?.findOneUser, name: user?.findOneUser?.username }
      // console.log(`Session 4, ${JSON.stringify(session)}`);
      return Promise.resolve(session)
    },
  },
  providers: [
    CredentialProvider({
      name: 'credentials',
      type: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: any, req: any) {
        const variables = {
          user: {
            username: credentials.username,
            password: credentials.password,
          },
        }
        return await apolloClient
          .request(SIGN_IN, variables)
          .then((res: any) => {
            const { details } = res.userSignIn
            return {
              name: credentials.username,
              id: details._id,
              email: details.email,
              user: details,
            }
          })
          .catch((err) => {
            const errorResult = typeof err === 'string' ? { error: err } : err
            const error: any = new ClientError(
              { ...errorResult },
              { query: SIGN_IN as any, variables },
            )
            // console.log(JSON.stringify(error.response), "apolloClient.request");
            throw error.response.response?.errors[0]
          })
      },
    }),
  ],
})

const getUser = async (userId: string) => {
  const rs = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user/retrieve-by-app/${userId}/${process.env.AP_ACCESS_TOKEN}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    },
  )

  // console.log(rs);
  return rs
}
