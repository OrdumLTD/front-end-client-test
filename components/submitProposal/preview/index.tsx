import Image from "next/image";
import { useContext } from "react";
import { useRouter } from "next/router";

import SubmitPropolsalContext from "@/store/submitPropolsal";
import sumbitPropolsalToBC from "@/utils/submit/submit";
import OrdumPreview from "@/components/preview";

type Props = {
  className?: string;
};

const SubmitPropolsalPreview: React.FC<Props> = (props) => {
  const submitCtx = useContext(SubmitPropolsalContext);
  const router = useRouter();
  const changeStep = submitCtx.changeToStep;

  const changePropolsalSubPage = async (step: number, route: string) => {
    changeStep(step);
    router.push(route);
  };

  return (
    <div className="xl:ml-48 2xl:ml-60 p-10">
      <div className="max-w-[33rem] flex flex-col">
        Preview
        {/* Context */}
        <div className="mt-10 ">
          <OrdumPreview
            teamName="Ordum"
            propolsalName="PropolsalName"
            date="21/12/2024"
            fundingAmount="1227 USD"
            deadline="12/05/2025"
            startDate="02/08/2024"
            propolsalDescription="Dscription Lorem Ipsum"
            problem="Problem Lorem Ipsum"
            solution="Solution Lorem Ipsum"
            ifYouHaveSeenSimilar="If you have seen lorem ipsum"
          />
        </div>
        <div className="mt-10 flex flex-col gap-4">
          {/* Buttons and whatnot */}
          <button
            className="bg-black text-white py-2 md:py-4 px-2 rounded"
            //   onClick={() => changePropolsalSubPage(1, "/")}
          >
            Go Back And Edit
          </button>
          <button
            className="bg-black text-white py-2 md:py-4 rounded"
            //   onClick={() => changePropolsalSubPage(1, "/")}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitPropolsalPreview;
