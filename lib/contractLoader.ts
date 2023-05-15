import {create} from '@phala/sdk';
import { ContractPromise } from "@polkadot/api-contract";
import { createApi } from './chainContractApi';
// JSON ABI
import ordumJson from './ordum.json';

export const loadContract = async():Promise<ContractPromise> =>{
    
    const contractId:string = '0xc2919b27099e95fba3ac3238a4fd0cbeb9bf4b0dda1355a864d423e0dc1804f1';
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