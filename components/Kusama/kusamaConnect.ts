import type { InjectedAccountWithMeta, InjectedExtension } from "@polkadot/extension-inject/types";
import { ApiPromise } from "@polkadot/api";
import { getTrackKsm, convertToBlockNumber } from "@/utils/submit/submit";
import '@polkadot/api-augment/kusama';

// Get the proposal context
type returnData = {
  hash:string
  preimageData:string
}
// Import the context for wallet and chain context

export const constuctPreimage = async (
  injector?: InjectedExtension,
  account?: InjectedAccountWithMeta,
  amount?: number,
  beneficiary?: string,
  chainAPI?: ApiPromise,
  date?:string
):Promise<returnData> =>  {
  // Get the signer from the account

 
  // Preimage call
  let hash = '';
  let preimageData = '';

  if(injector && account && amount && beneficiary && chainAPI){

     const tx_preimage_hex = chainAPI?.tx.treasury
    .spend(amount, beneficiary)
    .toHex()
    .slice(2);
    
  const preimageData = tx_preimage_hex;

  const call_preimage = chainAPI.tx.preimage.notePreimage(tx_preimage_hex);
  console.log("Submitting Preimage")

  await call_preimage.signAndSend(
    account.address,
    { signer: injector.signer }

   ).then(async(hash) => {
    if(hash){

      console.log('The hash '+ hash)
      console.log("Submitting referendum ")

      await submitProposal(
        account,chainAPI,amount,preimageData,injector,date
      )
    }
   });


  }

  const data:returnData = {
    hash,
    preimageData
   }
  return data
};

export const submitProposal = async(
    account?: InjectedAccountWithMeta,chainAPI?:ApiPromise,amount?:number,
    preimage_data?:string, injector?: InjectedExtension,date?:string
    ) =>{


      if(account && chainAPI && preimage_data && injector && amount && date){
        console.log("On referendum submit")

         // Calculate track 
      const {Track} = getTrackKsm(amount);

      const blockNumber = convertToBlockNumber(date);
      
      const tx_submit_hash = chainAPI?.tx.referenda.submit({Origins:"BigSpender"},{Inline:preimage_data},{At:blockNumber}); 

      await tx_submit_hash?.signAndSend(account.address,{ signer:injector.signer },({status,events}) =>{
            if(status.isInBlock){
               console.log("Inblock")
            }else if(status.isFinalized){
               console.log("Finalized")
               console.log(events)
            }
        }).catch(err => console.log(err))

      }
      

  }
