import type { InjectedAccountWithMeta, InjectedExtension } from "@polkadot/extension-inject/types";
import { ApiPromise } from "@polkadot/api";
import { getTrackKsm, convertToBlockNumber } from "@/utils/submit/submit";
import '@polkadot/api-augment/kusama';

// Interested Origins ( Small Spender, Medium Spender, Big Spender, Treasurer )

// Fetch Referendum Information 
export const getReferendumInfo = async(refId:number,api?:ApiPromise) =>{
    if(api){
        const result = await api.query.referenda.referendumInfoFor(refId)
        return result
    }
}


// History Referendas from track Queue
export const getTrackQueue = async(api:ApiPromise,trackId:number) =>{

}

// Helper function on Referenda info calculations
export const displayRefStatus = () =>{

}