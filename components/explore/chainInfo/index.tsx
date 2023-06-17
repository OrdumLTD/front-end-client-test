import Layout from "@/components/layout";
// import { Bookmark } from "react-feather";
// import Summary from "@/components/profileAbout/summary";
// import Team from "@/components/profileAbout/team/team";
// import Activity from "@/components/profileAbout/activity/activity";
import { useState } from "react";
import { useRouter } from "next/router";
import ApplicationProcess from "./applicationProcess";

import SearchIcon from "@/assets/svg-icons/search-icon.svg";
import Image from "next/image";

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
              onClick={() => {
                router.push("/submitproposal/tldr");
              }}
            >
              Apply
            </button>
          </div>
        </div>
      </nav>
      <div className="flex flex-col ">
        {/* Header */}
        <div className="mx-10 md:ml-16 md:mr-32 md:text-xl pb-2 md:border-b border-black mb-8 flex justify-between">
          <div className="flex gap-8 navbar">
            <div className=" hover:cursor-pointer">Grant Details</div>{" "}
            <div className="font-bold hover:cursor-pointer">
              Application process
            </div>{" "}
            <div className=" hover:cursor-pointer">Wiki</div>
          </div>
          <div className="-mt-1">
            <div>
              <label className="relative block">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Image src={SearchIcon} alt="Search lense" />
                </span>
                <input
                  className="w-[20rem] bg-white placeholder:font-italitc border border-black rounded-full  pl-10 py-1  focus:outline-none text-sm"
                  placeholder="Search for proposals and discussions"
                  type="text"
                />
              </label>
            </div>
          </div>
        </div>
        <ApplicationProcess />
      </div>
    </div>
  );
};

export default ChainInfo;
