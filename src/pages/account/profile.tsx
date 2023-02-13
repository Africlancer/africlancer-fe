import React, { useState, useContext, useEffect } from "react";
import { ProfilePage } from "../../modules/profile/page";
import { useQuery } from "@apollo/client";
import { FIND_ONE_PROFILE } from "@/src/modules/profile/gql/query";
import { ProfileContext } from "@/src/modules/profile/context";

const Profile = () => {
  return <ProfilePage/>;
};

export default Profile;