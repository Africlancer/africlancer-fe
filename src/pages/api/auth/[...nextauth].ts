import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import jwt from "jsonwebtoken";

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
    async jwt(params: any) {
      const { token } = params;

      console.log(params, "jws...");
      return token;
    },
    async session(params: any) {
      const { session, token } = params;
      session.user.name = token?.name;
      session.user.id = token?.sub;

      console.log(params, "process.env.TOKEN_SECRET");
      session.token = jwt.sign(
        {
          user: "sabiridwan",
          sub: "63eb6740cb05b1cfb7298e8f",
          roles: ["user"],
        },
        `ShVmYq3t6w9z$C&F)J@NcRfTjWnZr4u7`,
        {
          algorithm: "HS256",
        }
      );

      return session;
    },
    async signIn(params) {
      return true;
    },
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        username: { label: "Email", type: "text", placeholder: "Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };
        // Login logic
        const rs = await fetch(`${process.env.BASE_API}/auth/signin`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({ username, password }),
        })
          .then((rs) => rs.json())
          .then((rs) => {

            console.log(rs,'RS RESULT...')
            return {
              ...rs,
              ...rs?.details,
              id: rs?.details?._id,
              user: rs?.details,
            };
          });

        if (rs?.error) throw new Error(rs.message);
        return rs;
      },
    }),
  ],
  //   pages: {
  //     signIn: "/signin",
  //   },
};

export default NextAuth(authOptions);
