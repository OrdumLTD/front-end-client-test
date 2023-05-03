import Link from "next/link";

import React, { useContext, useEffect, useState } from "react";
import UserContext from "@/store/userContext";

import enablePolkadotExtensionCache from "@/components/wallet/polkadotjs/polkatdotjs";
import { web3Accounts } from "@polkadot/extension-dapp";
import type { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";
import dynamic from "next/dynamic";


const Connect = dynamic(() => import('@/components/wallet/polkadotjs/connect').then(m => m.Connect), {
  ssr: false,
});

const LogIn = () => {
  const userCtx = useContext(UserContext);

  const logInTest = () => {
    userCtx.logInUser("Test User");
  };

  // Wallet states
  const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>();

  useEffect(() => {
 
    // enablePolkadotExtensionCache();
    // const getWallets = async () => {
    //   const allAccounts = await web3Accounts();
    //   setAccounts(allAccounts);
    // };
    // getWallets();
    
  }, []);

  return (
    <div className="font-space-grotesk grid h-screen place-items-center">
      <div className="flex flex-col">
        <h1 className="md:text-5xl mb-10">Log in of sign up</h1>

        <div className="border py-2 flex flex-col place-items-center gap-4">
          {/* Is there a PJS isntalled */}
          {/* Show walles */}
          {/* Or show "Please install PJS" */}
          {/* <div className="border px-10 py-2 hover:bg-gray-200">PJS1</div>
          <div className="border px-10 py-2 hover:bg-gray-200">PJS1</div> */}
          <div>  
          <Connect />
          </div>
        </div>

        <div className="my-1 md:my-2"></div>
        {/* <button className="border border-gray-400 hover:bg-gray-200 py-2.5">
          <Link href="/signup">Sign up</Link>
        </button> */}
      </div>
      <div className="-mt-80 flex flex-col">
        <h2 className="md:text-5xl">New To Blockchain? Create Wallet</h2>
        <button className="border border-gray-400 hover:bg-gray-200 py-2.5 w-6/12 item-center ml-16 md:ml-48">
          Create Wallet
        </button>
      </div>
    </div>
  );
};

export default LogIn;
