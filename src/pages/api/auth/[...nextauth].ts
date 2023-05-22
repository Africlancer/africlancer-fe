import jwt from "jsonwebtoken";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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

      console.log(params, "JWT TOKEN");
      return { ...token, user: params?.user?.user };
    },
    //TODO use existing token or generate new token withouth calling user api by id.
    async session(params: any) {
      const { session, token } = params;
      const user = await getUser(token.sub);
      session.user = user;
      session.refresh_token = user.refresh_token;
      session.token = jwt.sign(
        {
          user: user.username,
          sub: token.sub,
          roles: user.roles,
        },
        process.env.TOKEN_SECRET,
        {
          expiresIn: "15m",
        }
      );
      return session;
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
            // console.log(rs);
            
            return {
              ...rs,
              id: rs?.details?._id,
              token: rs.access_token,
              user: { ...rs?.details },
            };
          });

        if (rs?.error) throw new Error(rs.message);

        // console.log(rs, "RESULT..");
        return rs;
      },
    }),
  ],
};

export default NextAuth(authOptions);

const getUser = async (userId: string) => {
  const rs = await fetch(
    `${process.env.BASE_API}/user/retrieve-by-app/${userId}/${process.env.AP_ACCESS_TOKEN}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    }
  ).then((rs) => rs.json());

  // console.log(rs); 
  return rs;
};
