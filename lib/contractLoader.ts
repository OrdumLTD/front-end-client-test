import {create} from '@phala/sdk';
import { ContractPromise } from "@polkadot/api-contract";
import { createApi } from './chainContractApi';
// JSON ABI
import ordumJson from './ordum.json';
import { ApiPromise } from '@polkadot/api';

export const loadContract = async():Promise<ContractPromise> =>{
    
    const contractId:string = '0x3352aeae26c047202238cdf28ae989f5ea04d7aefb0723a05509f0a1a7cae095';
    const rpc:string = 'wss://poc5.phala.network/ws';
    const pruntime:string = 'https://poc5.phala.network/tee-api-1';

    const api= await createApi(rpc);
    
    //@ts-ignore
    const contrapi: ApiPromise = await((await create({api,baseURL:pruntime,contractId})).api).isReady;
        
    const contract = new ContractPromise(
        //@ts-ignore
        contrapi,
        ordumJson,
        contractId
    )
    return contract
}

