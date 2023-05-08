import { stringToHex } from "@polkadot/util";

import type { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";

// Checking if extensaion is intalled

let enablePolkadotExtensionCache: Promise<void>;
 const enablePolkadotExtension = async (): Promise<void> => {
  if (enablePolkadotExtensionCache) return enablePolkadotExtensionCache;

  enablePolkadotExtensionCache = (async () => {
    const {web3Enable} = await import("@polkadot/extension-dapp");
    const extensions = await web3Enable("Ordum");

    if (extensions.length === 0) {
      throw new Error(
        "No extension installed, or the user did not accept the authorization"
      );
    }
  })();

  return enablePolkadotExtensionCache ;
};

export default enablePolkadotExtension