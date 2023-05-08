import Image from "next/image";

import electricity from "@/assets/svg-icons/electricity.svg";

type Props = {
  className?: string;
};

const ChainSidePanel: React.FC<Props> = (props) => {
  return (
    <div className={"pt-4 bg-gray-400 " + props.className}>
      <div className="px-5 grid gap-4">
        <button className="flex">
          <Image src={electricity} width={20} alt="" />
          <span className="mt-0.5 pl-4 font-extrabold text-xl">Overview</span>
        </button>
        <button className="flex">
          <Image src={electricity} width={20} alt="" />
          <span className="mt-0.5 pl-4 text-xl">My Grants</span>
        </button>{" "}
    
        <button className="flex">
          <Image src={electricity} width={20} alt="" />
          <span className="mt-0.5 pl-4 text-xl">Manage Teams</span>
        </button>
      </div>
    </div>
  );
};

export default ChainSidePanel;
