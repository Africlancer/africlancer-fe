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
    async jwt(params: any) {
      console.log(params, "JWT");
      const { token, user, account } = params;
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
      }
      if (user?.roles) {
        token.roles = user.roles.toString();
      }
      return token;
    },
    async session(params: any) {
      console.log(params, "session");
      const { session, token } = params;
      return session;
    },
    async signIn(params) {
      console.log(params, "signIn");
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
        }).then((rs) => rs.json());

        if (rs.statusCode === 200)
          // return Promise.resolve({
          //   id: "123",
          //   name: "sabi",
          //   email: "abc@gmail.com",
          //   image: "image.png",
          // });
        return { ...rs, token: rs?.access_token, user: rs.details };

        throw new Error(rs.message);
      },
    }),
  ],
  //   pages: {
  //     signIn: "/signin",
  //   },
};

export default NextAuth(authOptions);


