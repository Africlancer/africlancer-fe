import NextAuth, {NextAuthOptions} from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {
            },
            authorize(credentials, req) {
                const {username, password} = credentials as {
                    username: string
                    password: string
                }

                // Login logic
                if(username !== 'kloop' || password !== '123456')
                {
                    //return null
                    throw new Error('Invalid Credentials')
                }
                return { id: '123456', username: 'kloop' }
            },
          })
    ],
    pages: {
        signIn: '/signin'
    }
}

export default NextAuth(authOptions)