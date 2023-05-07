import { ReactNode, createContext, useState } from "react";
import { web3Accounts, web3Enable, web3FromSource } from "@polkadot/extension-dapp";

import { InjectedAccountWithMeta, InjectedExtension } from "@polkadot/extension-inject/types";
import React from "react";

type Props = {
  children: ReactNode;
};

interface WalletInfo {
  signerState: InjectedExtension;
  accounts?: InjectedAccountWithMeta[];
  selectedAccount: InjectedAccountWithMeta;
  getAllAccounts: (accounts?:InjectedAccountWithMeta[]) => void;
  selectAccount: (account:InjectedAccountWithMeta) => void;
}

const defaultState = {
  signerState: undefined,
  accounts: undefined,
  selectedAccount: undefined,
  getAllAccounts: (accounts?:InjectedAccountWithMeta[]) => {
    return;
  },
  selectAccount: (account: InjectedAccountWithMeta) => {
    return;
  },
};

const WalletContext = createContext<WalletInfo>(defaultState);

export const WalletContextProvider = ({ children }: Props) => {
  const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>();
  const [selectedAccount, setSelectedAccount] = useState<InjectedAccountWithMeta>();
  const [signer, setSigner] = useState<InjectedExtension>();

  // Funct to get all acounts
  const getAllAccounts = (accounts?:InjectedAccountWithMeta[]) => {
        setAccounts(accounts)
  };
  //Func to select an acount
  const selectAccount = async(account: InjectedAccountWithMeta) => {
        console.log("welcome" + account.meta.name)
        setSelectedAccount(account);
        const injector = await web3FromSource(account?.meta.source);
        setSigner(injector);
  };

  const context = {
    signerState: signer,
    accounts,
    selectedAccount,
    getAllAccounts,
    selectAccount
  };

  return (
    <WalletContext.Provider value={context}>{children}</WalletContext.Provider>
  );
};

export default WalletContext;
