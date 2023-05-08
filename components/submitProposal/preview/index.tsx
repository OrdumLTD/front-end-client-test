import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

import SubmitPropolsalContext from "@/store/submitPropolsal";
import WalletContext from "@/store/walletContext";
import ChainApiContext from "@/store/apiContext";
import OrdumPreview from "@/components/preview";
import { constuctPreimage } from "@/components/Kusama/kusamaConnect";

type Props = {
  className?: string;
};

const SubmitPropolsalPreview: React.FC<Props> = (props) => {
  const submitCtx = useContext(SubmitPropolsalContext);
  const WalletCtx = useContext(WalletContext);
  const ChainAPICtx = useContext(ChainApiContext);
  const router = useRouter();
  const changeStep = submitCtx.changeToStep;

  const changePropolsalSubPage = async (step: number, route: string) => {
    changeStep(step);
    router.push(route);
  };

  // Connect to the chain

  useEffect(() => {
    const run = async () => {
      await ChainAPICtx.fetchChainApi();
    };
    run();
  }, []);

  const chainAPI = ChainAPICtx.api;
  // Preimage test
  const submit = async () => {
    await constuctPreimage(
      WalletCtx?.signerState,
      WalletCtx?.selectedAccount,
      submitCtx?.tldr.fundingAmount,
      submitCtx?.tldr.account,
      chainAPI
    );
  };

  return (
    <div className="xl:ml-48 2xl:ml-60 p-10">
      <div className="max-w-[33rem] flex flex-col">
        Preview
        {/* Context */}
        <div className="mt-10 ">
          <OrdumPreview
            teamName={submitCtx.tldr.teamName}
            propolsalName={submitCtx.tldr.propolsalName}
            date={submitCtx.tldr.recieveDate}
            fundingAmount={submitCtx.tldr.fundingAmount}
            deadline={submitCtx.tldr.deadLine}
            startDate={submitCtx.tldr.startingDate}
            propolsalDescription={submitCtx.tldr.shortDescription}
            problem={submitCtx.tldr.shortDescription}
            solution={submitCtx.context.goal}
            ifYouHaveSeenSimilar={submitCtx.tldr.whyDifferentDescription}
          />
        </div>
        <div className="mt-10 flex flex-col gap-4">
          {/* Buttons and whatnot */}
          <button className="bg-black text-white py-2 md:py-4 px-2 rounded">
            Go Back And Edit
          </button>
          <button
            className="bg-black text-white py-2 md:py-4 rounded"
            onClick={() => {
              // Call functions here
              submit()
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitPropolsalPreview;