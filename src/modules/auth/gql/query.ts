import { IUser } from "../model";
import { useMutation, gql } from "@apollo/client";

const CREATE_USER = gql`
  mutation createUser($user: CreateUserInput!) {
    createUser(user: $user) {
      _id
      firstName
      lastName
      otherName
      email
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
