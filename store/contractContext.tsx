import React, { createContext, useState, ReactNode } from "react";
import { CertificateData, signCertificate } from "@phala/sdk";
import { ContractPromise } from "@polkadot/api-contract";

type Props = {
  children: ReactNode;
};

// Certificate Data
interface Contract {
  cache?: CertificateData;
  contractApi?: ContractPromise;
  signCert: (cert?: CertificateData) => void;
  setContractApi: (api?: ContractPromise) => void;
}

const defaultState = {
  cache: undefined,
  contractApi: undefined,
  signCert: (cert?: CertificateData) => {
    return;
  },
  setContractApi: (api?: ContractPromise) => {
    return;
  },
};

const ContractContext = createContext<Contract>(defaultState);

export const CertContextProvider = ({ children }: Props) => {
  const [cache, setCache] = useState<CertificateData>();
  const [contractApi, setContractApi] = useState<ContractPromise>();

  const signCert = (cert?: CertificateData) => {
    setCache(cert);
  };

  const setContract = (api?: ContractPromise) => {
    setContractApi(api);
  };

  const context = {
    cache,
    contractApi,
    signCert,
    setContractApi: setContract,
  };

  return (
    <ContractContext.Provider value={context}>
      {children}
    </ContractContext.Provider>
  );
};
export default ContractContext; 