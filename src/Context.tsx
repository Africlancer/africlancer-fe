import React, { ComponentProps, FC } from "react";
import { AuthContextProvider } from "./modules/auth/context";
import { BiddingContextProvider } from "./modules/bidding/context";
import { BookMarkContextProvider } from "./modules/bookmark/context";
import { FreelancersContextProvider } from "./modules/freelancers/context";
import { ProfileContextProvider } from "./modules/profile/context";
import { ProjectContextProvider } from "./modules/projects/context";


export const combineContext = (...components: FC[]): FC<any> => {
  return components.reduce(
    (AccumulatedComponents: any, CurrentComponent: any) => {
      return ({ children }: ComponentProps<FC<any>>): JSX.Element => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({ children }) => <>{children}</>
  );
};

const providers = [
    AuthContextProvider,
    ProfileContextProvider,
    ProjectContextProvider,
    BiddingContextProvider,
    FreelancersContextProvider,
    BookMarkContextProvider
] as any;

export const AppContextProvider = combineContext(...providers);