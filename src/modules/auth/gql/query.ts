import { IUser } from "../model";
import { useMutation, gql } from "@apollo/client";

const CREATE_USER = gql`
      mutation UserSignUp($user: UserSignUp!) {
        userSignUp(user: $user) {
        username
    }
  }
`;

export const useCreateUser = (callback: (rs: any) => void) => {
  return useMutation(CREATE_USER, {
    onCompleted: (rs) => {
      if (rs?.createUser) {
        callback(rs?.createUser);
      }
    },
    onError: (error: any) => {
      console.log(error);
    },
  });
};

export { CREATE_USER }