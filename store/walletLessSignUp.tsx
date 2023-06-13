import React, { useState, useContext, ReactNode, createContext, Dispatch, SetStateAction } from 'react'
import { CreateResult } from '@polkadot/ui-keyring/types';
import { KeyringPair } from '@polkadot/keyring/types';


type Props = {
    children: ReactNode;
};
  
interface WalletLessUser {
    name?: string,
    passcode?: string,
    signer?: CreateResult,
    setName:Dispatch<string>,
    setPasscode: Dispatch<string>,
    setSigner: Dispatch<CreateResult>
}

const WalletLessDefault:WalletLessUser ={
    name: undefined,
    passcode: undefined,
    signer: undefined, 
    setName: (name: string) => {return},
    setPasscode: (passcode: string) => {return},
    setSigner: (signer: CreateResult) => {return}
}

const WalletLessUserContext = createContext<WalletLessUser>(WalletLessDefault); 

export const WalletLessUserProvider = ({children}:Props) =>{
    const [name, setName] = useState<string>();
    const [passcode, setPasscode] = useState<string>();
    const [signer, setSigner] = useState<CreateResult>();


    return (
        <WalletLessUserContext.Provider value={{
            name,setName,
            passcode,setPasscode,
            signer,setSigner
            }}>
            {children}
        </WalletLessUserContext.Provider>
    )
}

export default WalletLessUserContext;

//Ordum keys Management State
interface OrdumAccount {
    secret?:string,
    password?:string,
    name?:string,
    keypair?:KeyringPair,
    setSecret: Dispatch<string>,
    setPassword: Dispatch<string>,
    setKeyPair: Dispatch<KeyringPair>
}

const defaultOrdumAccount:OrdumAccount ={
    // Thinking a mechanism to safely securing the secret
    secret:"forum satisfy suit amount success clever fire birth liberty snake orient pen",
    password:"123456", // Thinking to make user's password and encrypt the secret using that
    name: "Ordum", // Name of the crypto account controlled  by Ordum
    keypair: undefined,
    setSecret:(secret: string) => {return},
    setPassword:(password: string) =>{return},
    setKeyPair:(pair:KeyringPair) =>{return}
}

export const OrdumAccountContext = createContext<OrdumAccount>(defaultOrdumAccount);

export const OrdumAccountProvider = ({children}:Props)=>{
    //@ts-ignore
    const [secret, setSecret] =  useState<string>(defaultOrdumAccount.secret)
    //@ts-ignore
    const [password, setPassword] =  useState<string>(defaultOrdumAccount.password)
    const [keypair, setKeyPair] =  useState<KeyringPair>()
    //@ts-ignore
    const [name, setName] = useState<string>(defaultOrdumAccount.name);

    return (
        <OrdumAccountContext.Provider value={{
            secret,setSecret,
            password,setPassword,
            keypair,setKeyPair,
            name
        }}>
            {children}
        </OrdumAccountContext.Provider>
    )
}
