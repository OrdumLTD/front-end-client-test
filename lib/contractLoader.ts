import {create} from '@phala/sdk';
import { ContractPromise } from "@polkadot/api-contract";
import { createApi } from './chainContractApi';
// JSON ABI
import ordumJson from './ordum.json';
import { ApiPromise } from '@polkadot/api';

export const loadContract = async() =>{
    const contractId:string = '0xa9016cf9d6050d24bd06b91df39ba377181b822d2e423ae6e4eb0ab52e7b36a7';
    const rpc:string = 'wss://poc5.phala.network/ws';
    const pruntime:string = 'https;//poc5.phala.network/tee-api-1';

    const api= await createApi(rpc);
        
    const contract = new ContractPromise(
        //@ts-ignore
        (await create({api,baseURL:pruntime,contractId})).api,
            ordumJson,
            contractId
        )
    
    return contract
}