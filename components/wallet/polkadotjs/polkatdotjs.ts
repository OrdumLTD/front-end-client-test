import { web3Enable, web3Accounts, web3FromSource } from "@polkadot/extension-dapp";

import { stringToHex } from "@polkadot/util";

import type { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";

// Checking if extensaion is intalled

let enablePolkadotExtensionCache: Promise<void>;
export const enablePolkadotExtension = async (): Promise<void> => {
  if (enablePolkadotExtensionCache) return enablePolkadotExtensionCache;

  enablePolkadotExtensionCache = (async () => {
    const extensions = await web3Enable("Ordum");

    if (extensions.length === 0) {
      throw new Error(
        "No extension installed, or the user did not accept the authorization"
      );
    }
  })();

  return enablePolkadotExtensionCache;
};


