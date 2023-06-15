import { CertificateData, signCertificate } from "@phala/sdk";
import type { InjectedAccountWithMeta, InjectedExtension } from "@polkadot/extension-inject/types";
import { ApplicantProfile,IssuerProfile,Categories,Chains,AccountId, MemberRole, UserRole} from "../contractTypes/ordumTypes";
import { ApiPromise } from "@polkadot/api";
import { ContractPromise } from "@polkadot/api-contract";

// Main logic for caching and context state
export let certificateCache: Promise<CertificateData>;

export const onSignCertificate = async(
    api:ApiPromise,
    signer:InjectedExtension,
    account:InjectedAccountWithMeta
    
    ):Promise<CertificateData> =>{

    if(certificateCache) return certificateCache;
    let certificate:CertificateData;

    return certificateCache = (async() =>{
        certificate = await signCertificate({
            //@ts-ignore // Pjs Api version later that 9.14.2 is kinda not compatible
            api,
            signer:signer.signer,
            //@ts-ignore
            account:account
        })
        return certificate
    })()
}

export const createApplicantProfile = async(
    account:InjectedAccountWithMeta,
    signer: InjectedExtension,
    certificate: CertificateData,
    contract:ContractPromise,
    //Pure params
    name: string,
    accountId:AccountId,
    teamSize:number,
    description: string,
    allowedAccounts: Array<AccountId>|null,
    categories: Array<Categories>,
    members: Array<[AccountId,MemberRole]>|null,
    role: UserRole
) =>{

    const Signer = signer.signer;
    // Query txn
    const data = await contract.query.createApplicantProfile(
        certificate as any,
        {},
        name,
        accountId,
        teamSize,
        description,
        allowedAccounts,
        categories,
        members,
        role
    )
    
    // Gas params
    const options = {
        gasLimit: (data.gasRequired as any).refTime,
        storageDepositLimit: data.storageDeposit 
        ? data.storageDeposit.asCharge : null
    };
    // Txn data
    const txnData = contract.tx.createApplicantProfile(
        options,
        name,
        accountId,
        teamSize,
        description,
        allowedAccounts,
        categories,
        members,
        role
    );

   
    // Sign and Send
    //@ts-ignore
    txnData.signAndSend(account.address,{signer:Signer},({isInBlock,events,isCompleted,isFinalized})=>{
        if(isInBlock){
            console.log("In Block")
        }else if(isCompleted){
            console.log("Completed")
        }else if(isFinalized){
            console.log("Finalized Applicant Profile Creation")
        };
        // Events
        events?.map(event =>{
            console.log(event.toHuman())
        })
    })
    
}



// Grant Issuer Function 

export const createIssuerProfile = async(
    contract: ContractPromise,
    signer:InjectedExtension,
    account: InjectedAccountWithMeta,
    certificate: CertificateData,
    // Pure params
    name: string,
    chain: Chains,
    categories: Array<Categories>,
    description: string,
    mission: string,
    members: Array<[AccountId,MemberRole]> |null,
    allowedAccounts:Array<AccountId>,
    role: UserRole
) =>{

    const Signer = signer.signer;
    // Query txn
    const data = await contract.query.createIssuerProfile(
        certificate as any,
        {},
        name,
        chain,
        categories,
        description,
        mission,
        members,
        allowedAccounts,
        role
    )
    
    // Gas params
    const options = {
        gasLimit: (data.gasRequired as any).refTime,
        storageDepositLimit: data.storageDeposit 
        ? data.storageDeposit.asCharge : null
    };
    // Txn data
    const txnData = contract.tx.createIssuerProfile(
        options,
        name,
        chain,
        categories,
        description,
        mission,
        members,
        allowedAccounts,
        role
    );
    // Sign and Send
    //@ts-ignore
    txnData.signAndSend(account.address,{signer:Signer},({isInBlock,events,isCompleted,isFinalized})=>{
        if(isInBlock){
            console.log("In Block")
        }else if(isCompleted){
            console.log("Completed")
        }else if(isFinalized){
            console.log("Finalized Applicant Profile Creation")
        };
        // Events
        events?.map(event =>{
            console.log(event.toHuman())
        })
    })
    
}