import { AccountId, MemberRole } from "@/lib/contractTypes/ordumTypes";
import React, { createContext, useState, ReactNode, Dispatch } from "react";


type Props = {
  children: ReactNode;
};

interface createProfileData{
  teamType:string,
  userType:string,
  teamName: string;
  description: string;
  mission: string;
  projectType: string;
  residentChain:string,
  teamMembers?: Array<[AccountId,MemberRole]>;
}

const defaultProfileData:createProfileData ={
  teamType:"",
  userType:"",
  teamName:"",
  description:"",
  mission:"",
  projectType:"",
  residentChain:"",
  teamMembers:undefined
}

interface createProfile {
  profileData: createProfileData,
  setProfile:Dispatch<createProfileData>
}

const defaultProfile:createProfile ={
  profileData:defaultProfileData,
  setProfile:(value:createProfileData) =>{return}
}


const ProfileContext = createContext<createProfile>(defaultProfile);

export const ProfileContextProvider = ({ children }: Props) => {
  const [profileData, setProfileData] = useState<createProfileData>(defaultProfileData);

  const setProfile =(v:createProfileData)=>{
      setProfileData({...profileData,...v})
  }
 

  return (
    <ProfileContext.Provider value={{
      profileData,
      setProfile
    }}
    >{children}</ProfileContext.Provider>
  );
};

export default ProfileContext;
