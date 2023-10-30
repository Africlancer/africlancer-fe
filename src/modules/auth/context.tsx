import React, { useState } from "react";
import { useSignUpUser, useSignInUser, useSetUserLocation } from "./gql/query";
import { IUser } from "./model";
import { signIn } from "next-auth/react";
import { useLazyQuery } from "@apollo/client";
import { FIND_ONE_PROFILE } from "../profile/gql/query";
import { useRouter } from "next/router";
import { LoadingOutlined } from '@ant-design/icons'

interface IState {
  loading: boolean;
  signUp: (user: IUser) => Promise<void>
  signInUser: (user: IUser) => Promise<any>
}

const AuthContext = React.createContext<IState>({
  loading: false,
  signUp(user) {
    return null as any;
  },
  signInUser(user) {
    return null as any;
  }
});

const useAuthContext = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) throw new Error("contenxt doest not exist");
  return context;
};

interface IProps {
  notificationMsg: any
  children: React.ReactNode;
}

const AuthContextProvider: React.FC<IProps> = ({ children, notificationMsg }) => {
  const createSignUpQuery = useSignUpUser((rs) => {})
  const createSigninQuery = useSignInUser((rs) => {})
  const createSetUserLocation = useSetUserLocation((rs) => {})
  const [findProfile, {}] = useLazyQuery(FIND_ONE_PROFILE)
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()
  
  const signUp = async (user: IUser) => {
    setLoading(true)    
    return createSignUpQuery[0]({variables: { user }})
    .then((rs) => {
      console.log(createSignUpQuery);
      
      if(rs.errors)
      {
        notificationMsg.errorMsg('Error', '')
        setLoading(false)
      }
      else{
        notificationMsg.successMsg(`Account Created`, 
        <div>
            {/* <p className='mb-4'>Please Check Your Mail to Activate Your Account.</p>
            <p className='flex items-center gap-3'>Redirecting to Login Page 
            <LoadingOutlined  style={{fontSize: 14}} spin/></p> */}
        </div>)
        setTimeout(() => {
            router.push('/signin')
            setLoading(false)
        }, 8000);
      }
    }).catch(err => console.log(err))
  };

  const setUserLocation = async() => 
  {
    const getLocation = await fetch('https://ip-api.io/json')
    const data = await getLocation.json()

    createSetUserLocation[0]({variables: { profile: { 
      location: [data?.country_name, data?.city].toString(),
      flagURL: data?.flagUrl
    }}})
    .then(rs => {
      // console.log(rs)
      notificationMsg.successMsg(`Signed In Successfully`, 
      <div>
          <p className='flex items-center gap-3'>Redirecting to Your Dashboard. 
          <LoadingOutlined  style={{fontSize: 14}} spin/></p>
      </div>)
      setTimeout(() => {
        router.push("/dashboard");
        setLoading(false)
      }, 5000);
    })
  }

  const signInUser = async (user: IUser) => {
    setLoading(true) 
     return signIn("credentials", {
      ...user,
      redirect: false,
    }).then((rs: any) => {
      if(!rs?.error)
      {
        findProfile()
        .then(rs => {
          console.log(rs);     
          if(rs.data?.findOneProfile.location === "Earth" && rs.data?.findOneProfile.flagURL === "Earth")
          {
            console.log('not set');
            setUserLocation()
          }
          else
          {
            console.log('set');
            notificationMsg.successMsg(`Signed In Successfully`, 
            <div>
                <p className='flex items-center gap-3'>Redirecting to Your Dashboard. 
                <LoadingOutlined  style={{fontSize: 14}} spin/></p>
            </div>)
            setTimeout(() => {
              router.push("/dashboard");
              setLoading(false)
            }, 5000);
          }
        })
      }
      else{
        notificationMsg.errorMsg("Error", rs.error)
        setLoading(false) 
      }
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <AuthContext.Provider
      value={{ loading, signUp, signInUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, useAuthContext };
