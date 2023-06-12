import React, { createContext, useState, ReactNode } from "react";


type Props = {
  children: ReactNode;
};


interface SignUp {
 
  teamName?: string;
  description?: string;
  mission?: string;
  projectType?: string;
  teamMembers?: string[];
  setName: (v: string) => void;
  setDescription: (v: string) => void;
  setMission: (v: string) => void;
  setProjectType: (v: string) => void;
  addTeamMember: (v: string) => void;
}

const defaultState = {
  teamName: undefined,
  description: undefined,
  mission: undefined,
  projectType: undefined,
  teamMembers: [],
  setName: (v?: string) => { return },
  setDescription: (v?: string) => { return },
  setMission: (v?: string) => { return },
  setProjectType: (v?: string) => { return },
  addTeamMember: (v?: string) => { return },
};

const SignUpContext = createContext<SignUp>(defaultState);

export const SignUpContextProvider = ({ children }: Props) => {
  // const [cache, setCache] = useState<SignUp>();
  const [teamName, setTeamName] = useState<string>();
  const [description, setdDesc] = useState<string>();
  const [mission, setMiss] = useState<string>();
  const [projectType, setProject] = useState<string>();
  const [teamMembers, setTeamMembrs] = useState<string[]>();
  // const [contractApi, setContractApi] = useState<ContractPromise>();

  // const signCert = (cert?: CertificateData) =>{
  //     setCache(cert)
  // };

  // const setContract = (api?:ContractPromise) =>{
  //     setContractApi(api)
  // }

  const setName = (name?: string) => {
    setTeamName(name);
  };

  const setDescription = (description?: string) => {
    setdDesc(description);
  };

  const setMission = (mission?: string) => {
    setMiss(mission);
  };

  const setProjectType = (project?: string) => {
    setProject(project);
  };

  const addTeamMember = (teamMember?: string) =>{
    //@ts-ignore
    setTeamMembrs(teamMembers.push(teamMember))
  }

  const context = {
    // cache,
    teamName: teamName,
    description,
    mission,
    projectType,
    setName,
    setDescription,
    setProjectType,
    setMission,
    addTeamMember
  };

  return (
    <SignUpContext.Provider value={context}>{children}</SignUpContext.Provider>
  );
};

export default SignUpContext;
