import { ReactNode, createContext, useState } from "react";
import type{ InjectedAccountWithMeta, InjectedExtension} from "@polkadot/extension-inject/types";
import React from "react";

type Props = {
  children: ReactNode;
};

interface WalletInfo {
  wallet?: InjectedExtension
  accounts?: InjectedAccountWithMeta[];
  selectedAccount?: InjectedAccountWithMeta;
  getAllAccounts: (accounts?:InjectedAccountWithMeta[]) => void;
  selectAccount: (account?:InjectedAccountWithMeta) => void;
  getWallet: (wallet?:InjectedExtension) => void;
}

const defaultState = {
  wallet: undefined,
  accounts: undefined,
  selectedAccount: undefined,
  getAllAccounts: (accounts?:InjectedAccountWithMeta[]) => {
    return;
  },
  selectAccount: (account?: InjectedAccountWithMeta) => {
    return;
  },
  getWallet: (wallet?:InjectedExtension) =>{
    return;
  }
};

const WalletContext = createContext<WalletInfo>(defaultState);

export const WalletContextProvider = ({ children }: Props) => {
  const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>();
  const [selectedAccount, setSelectedAccount] = useState<InjectedAccountWithMeta>();
  const [wallet, setWallet] =  useState<InjectedExtension>();

  // Funct to get all acounts
  const getAllAccounts = (accounts?:InjectedAccountWithMeta[]) => {
        setAccounts(accounts)
  };
  //Func to select an acount
  const selectAccount = (account?: InjectedAccountWithMeta) => {
        console.log("welcome" + account?.meta.name)
        setSelectedAccount(account);    
  };
  const getWallet = (wallet?:InjectedExtension) =>{
        setWallet(wallet)
  }

  const context = {
    wallet,
    accounts,
    selectedAccount,
    getAllAccounts,
    selectAccount,
    getWallet
  };

  return (
    <WalletContext.Provider value={context}>{children}</WalletContext.Provider>
  );
};

export default WalletContext;
