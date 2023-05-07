import type { InjectedAccountWithMeta, InjectedExtension } from "@polkadot/extension-inject/types";
import { ApiPromise } from "@polkadot/api";
import { getTrackKsm, convertToBlockNumber } from "@/utils/submit/submit";
import { web3FromSource } from "@polkadot/extension-dapp";
import "@polkadot/types-augment/registry/kusama";
import "@polkadot/types-augment/lookup/types-kusama";
import "@polkadot/api-augment/kusama";

// Get the proposal context

// Import the context for wallet and chain context

export const constuctPreimage = async (
  injector: InjectedExtension,
  account: InjectedAccountWithMeta,
  amount: number,
  beneficiary: string,
  chainAPI: ApiPromise | undefined
) => {
  // Get the signer from the account

  // Preimage call
  const tx_preimage_hex = chainAPI?.tx.treasury
    .spend(amount, beneficiary)
    .toHex()
    .slice(2);

  const call_preimage = chainAPI?.tx.preimage.notePreimage(tx_preimage_hex);
    console.log("Submitting")
  await call_preimage?.signAndSend(
    account.address,
    { signer: injector.signer },
    ({ status, events }) => {
      if (status.isFinalized) {
        console.log("Finalized Preimage txn");
      }
      events?.map((event) => {
        console.log(event.toHuman());
      });
    }
  );
};

/*const submitProposal = async(
    account: InjectedAccountWithMeta,chainAPI:ApiPromise,
    track:string,blockNumber: number
    ) =>{

      console.log("submitting")
      const hash = "0x52a16cb6a14fed97265980bc66706bf8c0bfe55d5c4f1e8a29a1ad9ca6b208b3";
      // Accounts
      // Get the signer from the account
      const injector = await web3FromSource(account.meta.source);

      // Preimage call
      const tx_preimage_hex = chainAPI?.tx.treasury.spend(
        amount,beneficiary
      ).toHex().slice(2);

      const call_preimage = chainAPI?.tx.preimage.notePreimage(tx_preimage_hex);

      call_preimage.signAndSend().then
      //--------------------------------
      const tx_submit_hash = chainAPI?.tx.referenda.submit({Origins:track},{Lookup:{hash,len:44}},{After:blockNumber}); 

      await tx_submit_hash?.signAndSend(account.address,{ signer:injector.signer },({status,events}) =>{
            if(status.isInBlock){
               console.log("Inblock")
            }else if(status.isFinalized){
               console.log("Finalized")
               console.log(events)
            }
        }).catch(err => console.log(err))

  }*/
