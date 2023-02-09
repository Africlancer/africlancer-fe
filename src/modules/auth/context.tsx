import React from "react";
import { useCreateUser, useSignInUser } from "./gql/query";
import { IUser } from "./model";

interface IState {
  loading: boolean;
  signUp: (user: IUser) => Promise<void>;
  signIn: (user) => Promise<any>
}

const AuthContext = React.createContext<IState>({
  loading: false,
  signUp(user) {
    return null;
  },
  signIn(user) {
    return null
  }
});

const useAuthState = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) throw new Error("contenxt doest not exist");
  return context;
};

interface IProps {
  children: React.ReactNode;
}

const AuthContextProvider: React.FC<IProps> = ({ children }) => {
  const createUserQery = useCreateUser((rs) => {});
  const createSigninQuery = useSignInUser((rs) => {})

  const signUp = async (user: IUser): Promise<void> => {
    console.log(user);
    await createUserQery[0]({ variables: { user } }).then((rs) => {
      if (rs.data?.createUser) {
        console.log("User created..");
      }
    });
  };

  const signIn = async (user): Promise<any> => {
    return await createSigninQuery[0]({ variables: { user } }).then((rs) => {
      if (rs.data?.userSignIn) 
      {
        return { user: "User Signed In.."}
      }
      else 
      {
        return { error: rs?.errors }
      }
    })
  }

  return (
    <AuthContext.Provider
      value={{ loading: createUserQery[1].loading, signUp, signIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, useAuthState };
