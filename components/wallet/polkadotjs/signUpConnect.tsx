import { useState, useContext } from "react";

import WalletContext from "@/store/walletContext";
import UserContext from "@/store/userContext";
import dynamic from "next/dynamic";
import { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";
import { useRouter } from "next/router";

type TExtensionState = {
  loading: boolean;
  error: null | Error;
  data?: InjectedAccountWithMeta[];
};

const initialExtensionState: TExtensionState = {
  loading: false,
  error: null,
  data: undefined,
};

export const SignUpConnect = () => {
  const [state, setState] = useState(initialExtensionState);
  const [selectedAcc, setSelectedAcc] = useState<
    InjectedAccountWithMeta | undefined
  >(undefined);
  // Call the context here and pass allAccounts
  const walletCtx = useContext(WalletContext);
  const userCtx = useContext(UserContext);

  const router = useRouter();

  const handleConnect = async () => {
    setState({ ...initialExtensionState, loading: true });

    const { web3Enable } = await import("@polkadot/extension-dapp");
    web3Enable("Ordum")
      .then((injectedExtensions) => {
        if (!injectedExtensions.length) {
          return Promise.reject(new Error("NO_WALLET_DETECTED"));
        }
      })
      .catch((error) => {
        console.error("Error with connect", error);
        setState({ error, loading: false });
      });

    const { web3Accounts } = await import("@polkadot/extension-dapp");
    const allAccounts: InjectedAccountWithMeta[] | undefined =
      await web3Accounts();
    setSelectedAcc(allAccounts[0]);
    setState({
      loading: false,
      error: null,
      data: allAccounts,
    });
  };

  if (selectedAcc) {
    (async () => {
      const { web3FromSource } = await import("@polkadot/extension-dapp");
      const injector = await web3FromSource(selectedAcc.meta.source);
      walletCtx.getWallet(injector);
    })();
  }

  // Updating the wallet_context state
  walletCtx.getAllAccounts(state.data);

  if (state.error) {
    return (
      <span className="text-red-500 font-bold tracking-tight">
        Error connect: {state.error.message}
      </span>
    );
  }

  return state.data ? (
    <div className="flex flex-col">
      <span>Choose account</span>

      <select>
        {walletCtx.accounts?.map((account) => (
          <option
            key={account.address}
            onClick={() => {
              console.log("Click");
              setSelectedAcc(account);
              // walletCtx.selectAccount(account);
            }}
          >
            {account.meta.name}
          </option>
        ))}
      </select>
      <button
        className=" mt-2 border border-black p-0.5"
        onClick={() => {
          walletCtx.selectAccount(selectedAcc);
          console.log(walletCtx?.selectedAccount?.meta.name);
          router.push("/createteamprofile");
        }}
      >
        Use this account
      </button>
    </div>
  ) : (
    <button disabled={state.loading} onClick={handleConnect}>
      {state.loading ? "Connecting..." : "Choose A Wallet"}
    </button>
  );
};

function beatifyAddress(address: string) {
  return `${address.slice(0, 3)}...${address.slice(-3)}`;
}
