/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import Link from "next/link";

import Email from "@/assets/svg-icons/email.png";
import GitHub from "@/assets/svg-icons/github.png";
import Discord from "@/assets/svg-icons/discord.svg";
import Twitter from "@/assets/svg-icons/twitter-icon.svg";
import Matrix from "@/assets/svg-icons/matrix.png";
import Website from "@/assets/svg-icons/global.png";

export default function TeamMember() {
  return (
    <div className="flex md:justify-between">
      <img
        src="https://pngimg.com/uploads/pirate/pirate_PNG50.png"
        alt="avatar"
        className="w-12 h-12 md:w-24 md:h-24 rounded-full border-2 border-black"
      />

      <div className="flex flex-col md:w-[48rem] 2xl:w-[60rem]">
        <div className="flex flex-col">
          <div className="flex md:justify-between">
            <div className="text-sm md:text-2xl">Name</div>
            <div className="hidden md:block">BlockChain Row</div>
          </div>
          <div>Role</div>
        </div>
        <div className="w-[15rem] md:w-[48rem] text-xs md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>
      <div className="hidden w-[8rem] md:flex justify-around">
        <div>
          <Link href="/">
            <Image src={Email} alt="Send an Email" className="w-6 h-6" />
          </Link>
          <Link href="/">
            <Image src={Discord} alt="Link to Discord" className="w-6 h-6 mt-2" />
          </Link>
        </div>
        <div>
          <Link href="/">
            <Image src={Twitter} alt="Link to Twitter" className="w-6 h-6" />
          </Link>
          <Link href="/">
            <Image src={Matrix} alt="Link to Matrix" className="w-6 h-6 mt-2" />
          </Link>
        </div>
        <div>
          <Link href="/">
            <Image src={GitHub} alt="Link to Github " className="w-6 h-6" />
          </Link>
          <Link href="/">
            <Image src={Website} alt="Link to Website" className="w-6 h-6 mt-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
