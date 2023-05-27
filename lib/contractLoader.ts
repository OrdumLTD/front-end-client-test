import {create} from '@phala/sdk';
import { ContractPromise } from "@polkadot/api-contract";
import { createApi } from './chainContractApi';
// JSON ABI
import ordumJson from './ordum.json';
import { ApiPromise } from '@polkadot/api';

export const loadContract = async():Promise<ContractPromise> =>{
    
    const contractId:string = '0x00b0fd9fedbe3d7bd1e7d81dc24f21fdfb08f2ae7f900da7d62900d354b23fb5';
    const rpc:string = 'wss://poc5.phala.network/ws';
    const pruntime:string = 'https://poc5.phala.network/tee-api-1';

    const api= await createApi(rpc);
    
    const contrapi: ApiPromise = await((await create({api,baseURL:pruntime,contractId})).api).isReady;
        
    const contract = new ContractPromise(
        //@ts-ignore
        contrapi,
        ordumJson,
        contractId
    )
    return contract
}

