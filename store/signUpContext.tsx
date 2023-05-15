import React, { createContext, useState, ReactNode } from "react";
// import { CertificateData, signCertificate } from "@phala/sdk";
// import { ContractPromise } from '@polkadot/api-contract';

type Props = {
  children: ReactNode;
};

//
interface SignUp {
  // cache?: CertificateData,
  // contractApi?: ContractPromise,
  // signCert:(cert?: CertificateData)=> void;
  // setContractApi:(api?:ContractPromise)=> void;
  teamName: String | undefined;
  description: String | undefined;
  mission?: String | undefined;
  projectType: String | undefined;
  teamMembers: String[] | undefined;
  setName: (v: String) => void;
  setDescription: (v: String) => void;
  setMission: (v: String) => void;
  setProjectType: (v: String) => void;
  addTeamMember: (v: String) => void;
}

const defaultState = {
  teamName: "",
  description: "",
  mission: "",
  projectType: "",
  teamMembers: [],
  setName: (v: String) => { return },
  setDescription: (v: String) => { return },
  setMission: (v: String) => { return },
  setProjectType: (v: String) => { return },
  addTeamMember: (v: String) => { return },
};

const SignUpContext = createContext<SignUp>(defaultState);

export const SignUpContextProvider = ({ children }: Props) => {
  // const [cache, setCache] = useState<SignUp>();
  const [teamName, setTeamName] = useState<String>();
  const [description, setdDesc] = useState<String>();
  const [mission, setMiss] = useState<String>();
  const [projectType, setProject] = useState<String>();
  const [teamMembers, setTeamMembrs] = useState<String[]>();
  // const [contractApi, setContractApi] = useState<ContractPromise>();

  // const signCert = (cert?: CertificateData) =>{
  //     setCache(cert)
  // };

  // const setContract = (api?:ContractPromise) =>{
  //     setContractApi(api)
  // }

  const setName = (name?: String) => {
    setTeamName(name);
  };

  const setDescription = (description?: String) => {
    setdDesc(description);
  };

  const setMission = (mission?: String) => {
    setMiss(mission);
  };

  const setProjectType = (project?: String) => {
    setProject(project);
  };

  const addTeamMember = (teamMember?: String) =>{
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
    setMission,
    setProjectType,
    // contractApi,
    // signCert,
    // setContractApi: setContract
  };

  return (
    <SignUpContext.Provider value={context}>{children}</SignUpContext.Provider>
  );
};

export default SignUpContext;
