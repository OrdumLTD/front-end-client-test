import { useState } from 'react';
import {
  web3Accounts,
  web3Enable
} from '@polkadot/extension-dapp';

import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';

type TExtensionState = {
  data?: {
    accounts: InjectedAccountWithMeta[],
    defaultAccount: InjectedAccountWithMeta,
  }
  loading: boolean
  error: null | Error
}

const initialExtensionState: TExtensionState = {
  data: undefined,
  loading: false,
  error: null
};

export const Connect = () => {
  const [state, setState] = useState(initialExtensionState);

  const handleConnect = () => {
    setState({ ...initialExtensionState, loading: true });

    web3Enable('Ordum')
      .then((injectedExtensions) => {
        if (!injectedExtensions.length) {
          return Promise.reject(new Error('NO_INJECTED_EXTENSIONS'));
        }
        return web3Accounts();
      })
      .then((accounts) => {
        if (!accounts.length) {
          return Promise.reject(new Error('NO_ACCOUNTS'));
        }

        setState({
          error: null,
          loading: false,
          data: {
            accounts: accounts,
            defaultAccount: accounts[ 0 ],
          }
        });
      })
      .catch((error) => {
        console.error('Error with connect', error);
        setState({ error, loading: false, data: undefined });
      });
  };

  if (state.error) {
    return (
      <span className="text-red-500 font-bold tracking-tight">
        Error with connect: {state.error.message}
      </span>
    );
  }

  return state.data
    ? <>Hello, {state.data.defaultAccount.meta.name}</>
    : <button
      disabled={state.loading}
      onClick={handleConnect}
    >
      {state.loading ? 'Connecting...' : 'Connect'}
    </button>;
};

function beatifyAddress(address: string) {
  return `${address.slice(0, 3)}...${address.slice(-3)}`;
}