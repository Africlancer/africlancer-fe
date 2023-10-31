import { useMutation, gql } from '@apollo/client'

const USER_SIGNUP = gql`
  mutation UserSignUp($user: UserSignUp!) {
    userSignUp(user: $user) {
      _id
      profileID
    }
  }
`

const USER_SIGNIN = gql`
  mutation UserSignIn($user: UserSignIn!) {
    userSignIn(user: $user) {
      access_token
    }
  }
`

const SET_USER_LOCATION = gql`
  mutation UpdateProfile($profile: QueryProfileInput!) {
    updateProfile(profile: $profile)
  }
`

export const useSignUpUser = (callback: (rs: any) => void) => {
  return useMutation(USER_SIGNUP, {
    onCompleted: (rs) => {
      if (rs?.userSignUp) {
        callback(rs?.userSignUp)
      }
    },
    onError: (error: any) => {
      return error
    },
  })
}

export const useSetUserLocation = (callback: (rs: any) => void) => {
  return useMutation(SET_USER_LOCATION, {
    onCompleted: (rs) => {
      if (rs?.updateProfile) {
        callback(rs?.updateProfile)
      }
    },
    onError: (error: any) => {
      return error
    },
  })
}

export const useSignInUser = (callback: (rs: any) => void) => {
  return useMutation(USER_SIGNIN, {
    onCompleted: (rs) => {
      if (rs?.userSignIn) {
        callback(rs?.userSignIn)
      }
    },
    onError: (error: any) => {
      return error
    },
  })
}

export { USER_SIGNUP, USER_SIGNIN }
