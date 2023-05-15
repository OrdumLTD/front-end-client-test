import Layout from "@/components/layout";
// import { Bookmark } from "react-feather";
// import Summary from "@/components/profileAbout/summary";
// import Team from "@/components/profileAbout/team/team";
// import Activity from "@/components/profileAbout/activity/activity";
import { useState } from "react";
import { useRouter } from "next/router";
import ApplicationProcess from "./applicationProcess";

// enum About {
//   Summary,
//   Activity,
//   Team,
// }

const ChainInfo = () => {
  //   const [aboutMenu, setAboutMenu] = useState(About.Summary);

  const router = useRouter();

  return (
    <div className="font-space-grotesk flex flex-col w-screen ">
      {/* Banner */}
      <div className="h-40 md:h-80 bg-emerald-500 min-h-[12rem]"></div>
      {/* Company info and social */}
      <nav className="flex navbar bg-white relative mb-8 md:mb-16">
        <div className="ml-2 md:ml-16 w-full flex ">
          <div
            className="
       -mt-5 h-14 w-14
       md:-mt-8 md:h-24 md:w-24
       border-2
       bg-black rounded-full text-white"
          ></div>
          <div className="ml-1 md:ml-5 md:mt-2 flex flex-col">
            <span className="md:text-2xl">Kusama Treasury</span>
            <span className="text-xs md:text-sm">
              Granst for the Kusama ecosystem
            </span>
          </div>
          <div className="absolute mt-2 right-16 md:mt-4 md:right-32 flex flex-row items-center">
            <button
              className="
          rounded
          px-2 md:px-16 md:py-0.5 md:py-1
          bg-black text-white
          text-sm md:text-base"
              onClick={() => {router.push("/submitproposal/tldr")}}
            >
              Apply
            </button>
          </div>
        </div>
      </nav>
      <div className="flex flex-col ">
        {/* Header */}
        <div className="mx-10 md:ml-16 md:mr-32 md:text-xl flex navbar md:border-b border-black mb-8 flex gap-8"></div>
        <ApplicationProcess />
      </div>
    </div>
  );
};

export default ChainInfo;