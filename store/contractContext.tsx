import React, {createContext, useState, ReactNode} from 'react';
import { CertificateData, signCertificate } from "@phala/sdk";


type Props = {
    children: ReactNode;
};
  
// Certificate Data
interface Certificate {
    cache?: CertificateData,
    signCert:(cert?: CertificateData)=> void;
}

const defaultState  = {
    cache: undefined,
    signCert: (cert?: CertificateData) =>{
        return
    }
}

const CertificateContext = createContext<Certificate>(defaultState);

export const CertContextProvider = ({children}:Props) =>{
    const [cache, setCache] = useState<CertificateData>();

    const signCert = (cert?: CertificateData) =>{
        setCache(cert)
    };

    const context = {
        cache,
        signCert
    }

    return (
        <CertificateContext.Provider value={context}>{children}</CertificateContext.Provider>
      );

}



