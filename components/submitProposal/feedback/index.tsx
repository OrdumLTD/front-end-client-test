import Image from "next/image";

import { useContext } from "react";
import { useRouter } from "next/router";

import SubmitPropolsalContext from "@/store/submitPropolsal";

type Props = {
  className?: string;
};

const SubmitPropolsalFeedback: React.FC<Props> = (props) => {
  const submitCtx = useContext(SubmitPropolsalContext);
  const router = useRouter();
  const changeStep = submitCtx.changeToStep;

  const changePropolsalSubPage = async (step: number, route: string) => {
    changeStep(step);
    router.push(route);
  };

  return (
    <div className="p-10">
      <div className="max-w-[33rem] flex flex-col">
        <h1 className="text-4xl xl:text-6xl font-medium">Submit Proposal</h1>

        <h2 className="mt-8 text-4xl">7. Feedback</h2>
        <form className="mt-4">
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

          {/* ToDo Indexing on the menu show Context, even after weswitch to Problem Solution */}\
          {/* Where to go from here? */}
          <div className="mt-10 flex flex-col gap-4">
            <button
              className="bg-black text-white py-2 md:py-4"
              onClick={() =>
                changePropolsalSubPage(7, "/submitproposal/feedback")
              }
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
        </form>
      </div>
    </div>
  );
};

export default SubmitPropolsalFeedback;
