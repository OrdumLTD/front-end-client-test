import Image from "next/image";

import user from "@/assets/svg-icons/user.svg";
import team from "@/assets/svg-icons/team.svg";

export default function Sidenav() {
  return (
    <nav className="w-12 md:w-40 ">
      <div className="font-semibold">Profile Type</div>

      <div className="mt-2 flex">
        <Image src={user} height={18} alt="aplicant" />
        <span className="text-sm">Applicant</span>
      </div>

      <div className="mt-1 flex">
        <Image src={team} height={18} alt="aplicant" />
        <span className="text-sm">Team</span>
      </div>

      <div className="mt-4 flex flex-col gap-1">
        <span className="text-sm font-bold">Funding Recieved</span>
        <span className="text-xl">0.000000</span>
        <div>
          <select
            className="
             block w-24 px-1 md:py-1 border border-slate-300 rounded-md text-sm md:text-base shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 bg-gray-300"
          >
            <option value="" className="" disabled  hidden>
              USD
            </option>
            <option value="USD">USD</option>
            <option value="KSM">KSM</option>
            <option value="DOT">DOT</option>
          </select>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex flex-col gap-2">
          <span className="text-sm font-bold">No of application</span>
          <span className="text-xs">Nothig here yet.</span>
        </div>
      </div>
    </nav>
  );
}
