import { ReactNode, createContext, useState } from "react";
import { InjectedAccountWithMeta} from "@polkadot/extension-inject/types";
import React from "react";

type Props = {
  children: ReactNode;
};

interface WalletInfo {
  accounts?: InjectedAccountWithMeta[];
  selectedAccount?: InjectedAccountWithMeta;
  getAllAccounts: (accounts?:InjectedAccountWithMeta[]) => void;
  selectAccount: (account:InjectedAccountWithMeta) => void;
}

const defaultState = {
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

  // Funct to get all acounts
  const getAllAccounts = (accounts?:InjectedAccountWithMeta[]) => {
        setAccounts(accounts)
  };
  //Func to select an acount
  const selectAccount = async(account: InjectedAccountWithMeta) => {
        console.log("welcome" + account.meta.name)
        setSelectedAccount(account);    
  };

  const context = {
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
