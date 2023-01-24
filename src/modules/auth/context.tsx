import React from "react";
import { useCreateUser } from "./gql/query";
import { IUser } from "./model";

interface IState {
  loading: boolean;
  signUp: (user: IUser) => Promise<void>;
}

const AuthContext = React.createContext<IState>({
  loading: false,
  signUp(user) {
    return null;
  },
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

  const signUp = async (user: IUser): Promise<void> => {
    console.log(user);

    await createUserQery[0]({ variables: { user } }).then((rs) => {
      if (rs.data?.createUser) {
        console.log("User created..");
      }
    });
  };

  return (
    <AuthContext.Provider
      value={{ loading: createUserQery[1].loading, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, useAuthState };
