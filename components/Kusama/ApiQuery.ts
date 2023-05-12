import type { InjectedAccountWithMeta, InjectedExtension } from "@polkadot/extension-inject/types";
import { ApiPromise } from "@polkadot/api";
import { getTrackKsm, convertToBlockNumber } from "@/utils/submit/submit";
import '@polkadot/api-augment/kusama';

// Interested Origins ( Small Spender, Medium Spender, Big Spender, Treasurer )

// Fetch Referendum Information 
export const getReferendumInfo = async(id:number) =>{

}


// History Referendas from track Queue
export const getTrackQueue = async() =>{

}

// Helper function on Referenda info calculations
export const displayRefStatus = () =>{

}