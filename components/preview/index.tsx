import { useContext } from "react";
import { useRouter } from "next/router";

type Props = {
  className?: string;
  teamName?: string;
  propolsalName?: string;
  date?: string;
  fundingAmount?: number;
  govType?: string;
  deadline?: string;
  startDate?: string;
  propolsalDescription?: string;
  problem?: string;
  solution?: string;
  ifYouHaveSeenSimilar?: string;
};

const OrdumPreview: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col">
      <div className="">
        <div className="text-4xl font-semibold">
          {props.teamName} | {props.propolsalName}
        </div>
        <div className="mt-4">
          <span>{props.teamName}</span>{" "}
          <span className="font-bold">Discussion</span>
        </div>
        <div className="mt-8 flex gap-4">
          <div className="border rounded-xl px-6 py-2 text-xl bg-gray-300">
            Polkassembly
          </div>
          <div className="border rounded-xl px-6 py-2 text-xl bg-gray-300">
            Subsquare
          </div>
        </div>
        <div className="mt-8 flex gap-4">
          <div className="flex flex-col">
            <span className="font-bold">Date</span> <div>{props.date}</div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">Funding</span>{" "}
            <div>{props.fundingAmount}</div>
          </div>{" "}
          <div className="flex flex-col">
            <span className="font-bold">Type</span> <span>{props.govType}</span>
          </div>{" "}
          <div className="flex flex-col">
            <span className="font-bold">Deadline</span> {props.deadline}
          </div>{" "}
          <div className="flex flex-col">
            <span className="font-bold">Start</span> {props.startDate}
          </div>
        </div>
        <div className="mt-8 text-xl">
          <div>{props.propolsalDescription}</div>
          <div className="mt-4">
            <h3 className="font-bold text-2xl">Problem</h3>{" "}
            <div>{props.problem}</div>
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-2xl">Solution</h3>{" "}
            <div>{props.solution}</div>{" "}
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-2xl">If you have seen similar proposals before: why is yours different?</h3>{" "}
            <div>{props.ifYouHaveSeenSimilar}</div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdumPreview;
