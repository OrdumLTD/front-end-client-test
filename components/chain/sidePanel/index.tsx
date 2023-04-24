import Image from "next/image";

import electricity from "@/assets/svg-icons/electricity.svg";

type Props = {
  className?: string;
};

const ChainSidePanel: React.FC<Props> = (props) => {
  return (
    <div className={"pt-4 " + props.className}>
      <div className="pl-8 grid gap-4">
        <button className="flex">
          <Image src={electricity} width={20} alt="" />
          <span className="mt-0.5 pl-4 font-extrabold text-xl">Overview</span>
        </button>
        <button className="flex">
          <Image src={electricity} width={20} alt="" />
          <span className="mt-0.5 pl-4 text-xl">All Proposals</span>
        </button>{" "}
        <button className="flex">
          <Image src={electricity} width={20} alt="" />
          <span className="mt-0.5 pl-4 text-xl">Discussions</span>
        </button>{" "}
        <button className="flex">
          <Image src={electricity} width={20} alt="" />
          <span className="mt-0.5 pl-4 text-xl">Small Spender</span>
        </button>
        <button className="flex">
          <Image src={electricity} width={20} alt="" />
          <span className="mt-0.5 pl-4 text-xl">Medium Spender</span>
        </button>
        <button className="flex">
          <Image src={electricity} width={20} alt="" />
          <span className="mt-0.5 pl-4 text-xl">Big Spender</span>
        </button>
      </div>
    </div>
  );
};

export default ChainSidePanel;
