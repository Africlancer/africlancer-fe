import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

console.log(process.env.TOKEN_SECRET, "process.env.TOKEN_SECRET");

const authOptions: NextAuthOptions = {
  secret: process.env.TOKEN_SECRET,
  jwt: {
    secret: process.env.TOKEN_SECRET,
  },
  session: {
    strategy: "jwt",
    maxAge: parseInt(process.env.TOKEN_MAX_AGE as string),
  },
  callbacks: {
    async jwt({ token, user, account }) {
      console.log("JWT : " , token, user, account)
      return token
    },
    async session({ session, token }) {
      console.log("SESSION : ", session, token)
      return session
    },
    async signIn(params) {
        console.log("SIGNIN : ", params)
        return true
    },
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        // username: { label: "Email", type: "text", placeholder: "Email" },
        // password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };
          
        // Login logic
        const result = await fetch(`${process.env.BASE_API}/auth/signin`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({ username, password }),
        })
        const user = await result.json()
        
        if (result.ok && user) {
          return user
        }
        throw new Error(user.message);

        // if (rs.statusCode === 200)
        //  {
        //   console.log(rs)
        //   // return { ...rs, token: rs?.access_token, user: rs.details };
        //  } // return Promise.resolve({
        //   //   id: "123",
        //   //   name: "sabi",
        //   //   email: "abc@gmail.com",
        //   //   image: "image.png",
        //   // });
        // throw new Error(rs.message);
      },
    }),
  ],
  //   pages: {
  //     signIn: "/signin",
  //   },
};
export default NextAuth(authOptions);
