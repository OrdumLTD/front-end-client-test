import { ApplicantProfile,IssuerProfile} from "../contractTypes/ordumTypes";
import type { InjectedAccountWithMeta, InjectedExtension } from "@polkadot/extension-inject/types";
import { useContext } from "react";
import { certificateCache,onSignCertificate } from "../ContractFns/createProfile";
import { CertContextProvider } from "@/store/contractContext";
import { ContractPromise } from "@polkadot/api-contract";
import { CertificateData } from "@phala/sdk";
import { ApiPromise } from "@polkadot/api";
import { ContractCallOutcome } from "@polkadot/api-contract/types";

// Certificate handling

// Applicant Profile Query
// Pass the context value directly
export const getApplicant = async(
    contract:ContractPromise,
    api:ApiPromise,
    signer: InjectedExtension,
    account:InjectedAccountWithMeta,
    Certificate?: CertificateData,
    
):Promise<ContractCallOutcome> =>{

    // Check if Certificate is there, If not then sign the Cert
    if(Certificate){
        const returnData = await contract.query.getApplicantProfile( Certificate as any,{});
        if(returnData.result.asErr){
            console.log("Error "+ returnData.result)
            return returnData
        }else if(returnData.result.asOk){
            console.log("Ok "+ returnData.result)
            return returnData
        }
        return returnData
    }else{
        // Sign the new Certificate and it will update the cache
        const certificate = await onSignCertificate(api,signer,account);
        const returnData = await contract.query.getApplicantProfile( certificate as any,{});
        if(returnData.result.asErr){
            console.log("Error "+ returnData.result)
            return returnData
        }else if(returnData.result.asOk){
            console.log("Ok "+ returnData.result)
            return returnData
        }
        return returnData
    }
}

// Issuer Profile Query
export const getIssuer = async(
    contract:ContractPromise,
    api:ApiPromise,
    signer: InjectedExtension,
    account:InjectedAccountWithMeta,
    Certificate?: CertificateData,
    
):Promise<ContractCallOutcome> =>{

    // Check if Certificate is there, If not then sign the Cert
    if(Certificate){
        const returnData = await contract.query.getIssuerProfile( Certificate as any,{});
        if(returnData.result.asErr){
            console.log("Error "+ returnData.result)
            return returnData
        }else if(returnData.result.asOk){
            console.log("Ok "+ returnData.result)
            return returnData
        }
        return returnData
    }else{
        // Sign the new Certificate and it will update the cache
        const certificate = await onSignCertificate(api,signer,account);
        const returnData = await contract.query.getApplicantProfile( certificate as any,{});
        if(returnData.result.asErr){
            console.log("Error "+ returnData.result)
            return returnData
        }else if(returnData.result.asOk){
            console.log("Ok "+ returnData.result)
            return returnData
        }
        return returnData
    }
}


// All Applicants
export const getAllApplicants = async(
    contract:ContractPromise,
    api:ApiPromise,
    signer: InjectedExtension,
    account:InjectedAccountWithMeta,
    Certificate?: CertificateData,
    
):Promise<ContractCallOutcome> =>{

    // Check if Certificate is there, If not then sign the Cert
    if(Certificate){
        const returnData = await contract.query.getAllApplicants( Certificate as any,{});
        if(returnData.result.asErr){
            console.log("Error "+ returnData.result)
            return returnData
        }else if(returnData.result.asOk){
            console.log("Ok "+ returnData.result)
            return returnData
        }
        return returnData
    }else{
        // Sign the new Certificate and it will update the cache
        const certificate = await onSignCertificate(api,signer,account);
        const returnData = await contract.query.getApplicantProfile( certificate as any,{});
        if(returnData.result.asErr){
            console.log("Error "+ returnData.result)
            return returnData
        }else if(returnData.result.asOk){
            console.log("Ok "+ returnData.result)
            return returnData
        }
        return returnData
    }
}


// All Issuers
export const getAllIssuers = async(
    contract:ContractPromise,
    api:ApiPromise,
    signer: InjectedExtension,
    account:InjectedAccountWithMeta,
    Certificate?: CertificateData,
    
):Promise<ContractCallOutcome> =>{

    // Check if Certificate is there, If not then sign the Cert
    if(Certificate){
        const returnData = await contract.query.getAllIssuers( Certificate as any,{});
        if(returnData.result.asErr){
            console.log("Error "+ returnData.result)
            return returnData
        }else if(returnData.result.asOk){
            console.log("Ok "+ returnData.result)
            return returnData
        }
        return returnData
    }else{
        // Sign the new Certificate and it will update the cache
        const certificate = await onSignCertificate(api,signer,account);
        const returnData = await contract.query.getApplicantProfile( certificate as any,{});
        if(returnData.result.asErr){
            console.log("Error "+ returnData.result)
            return returnData
        }else if(returnData.result.asOk){
            console.log("Ok "+ returnData.result)
            return returnData
        }
        return returnData
    }
}
