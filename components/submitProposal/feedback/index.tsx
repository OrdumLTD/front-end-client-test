
import Image from "next/image";

import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ApiPromise, Keyring, WsProvider } from '@polkadot/api';
import '@polkadot/types-augment/registry/kusama'
import '@polkadot/types-augment/lookup/types-kusama'
import * as kTypes from '@polkadot/types-augment/lookup/kusama';


import SubmitPropolsalContext from "@/store/submitPropolsal";
import ChainApiContext from "@/store/apiContext";

import '@polkadot/api-augment/kusama';

type Props = {
  className?: string;
};

// A way to connect to the chain api
// useState(apiInstance) = api

//api.tx.send()

const SubmitPropolsalFeedback: React.FC<Props> = (props) => {
  const submitCtx = useContext(SubmitPropolsalContext);
  const router = useRouter();
  const changeStep = submitCtx.changeToStep;

  // APIContext
  const apiCTX = useContext(ChainApiContext);
  const chainAPI = apiCTX.api;
  const fetchChainApi = apiCTX.fetchChainApi;


  useEffect(()=>{
    const run = () =>{
      fetchChainApi?.();
    }
    run()
  },[])

    const propose = async() =>{
      console.log("submitting")
        const hash = "0x52a16cb6a14fed97265980bc66706bf8c0bfe55d5c4f1e8a29a1ad9ca6b208b3";
        // Accounts
        const keyring = new Keyring({type:"sr25519"}); // Default sr25519
        const alice = keyring.addFromUri("//Alice");

        const Origin = kTypes.default.KusamaRuntimeGovernanceOriginsPalletCustomOriginsOrigin._enum[12];
        const tx_hash = chainAPI?.tx.referenda.submit({Origins:Origin},{Lookup:{hash,len:44}},{After:1}); 

        await tx_hash?.signAndSend(alice,(status) =>{
              if(status.status.isInBlock){
                 console.log("Inblock")
              }else if(status.status.isFinalized){
                 console.log("Finalized")
                 console.log(status.events)
              }
          }).catch(err => console.log(err))

    }

  //-------------------**------------------------------------------------//
  const changePropolsalSubPage = async (step: number, route: string) => {
    changeStep(step);
    router.push(route);
  };

  return (
    <div className="p-10">
      <div className="max-w-[33rem] flex flex-col">
        <h1 className="text-4xl xl:text-6xl font-medium">Submit Proposal</h1>

        <h2 className="mt-8 text-4xl">7. Feedback</h2>
        <div className="mt-4">
          <label className="mt-4 text-xl flex">
            <span>
              How did you become familiar with the spending mechanism and the
              on-chain treasury?
            </span>
          </label>
          {/* ToDo fix line break for plaeholder */}
          <textarea
            className="mt-2 w-full text-sm bg-white placeholder:font-italitc placeholder:text-xs border border-black
             rounded py-2 pl-2 pr-4 focus:outline-none resize-none
              min-h-[10rem]"
            placeholder="How is their role relevant to the proposal? 
            Professional experience 
            Community engagement or involvement with other projects"
          />

          {/* Button Row - take one level up */}

          {/* ToDo Indexing on the menu show Context, even after weswitch to Problem Solution */}
          {/* Where to go from here? */}
          <div className="mt-10 flex flex-col gap-4">
            <button
              className="bg-black text-white py-2 md:py-4"
              onClick={() => propose()}
            >
              Submit Discussion
            </button>
            <button
              className="bg-black text-white py-2 md:py-4"
              onClick={() => changePropolsalSubPage(1, "/")}
            >
              Save draft and Close
            </button>
            <button
              className="bg-gray-400 text-white py-2 md:py-4"
              onClick={() =>
                changePropolsalSubPage(6, "/submitproposal/report")
              }
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitPropolsalFeedback;
