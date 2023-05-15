//ToDo - Add props for links and 

import Image from "next/image";
import Link from "next/link";

import Email from "@/assets/svg-icons/email.png";
import GitHub from "@/assets/svg-icons/github.png";
import Discord from "@/assets/svg-icons/discord.svg";
import Twitter from "@/assets/svg-icons/twitter-icon.svg";
import Matrix from "@/assets/svg-icons/matrix.png";
import Website from "@/assets/svg-icons/global.png";

export default function Bio() {
  return (
    <div className="flex flex-col">
      <div className="md:flex flex-row md:gap-16">
        <p className="text-lg md:text-4xl">Bio</p>
        <div className="md:ml-10 mt-2  flex flex-row gap-4">
          <div className="ml-[38rem] flex flex-row gap-4">
          <Link href="/">
            <Image src={Email} alt="Send an Email" height={24} />
          </Link>
          <Link href="/">
            <Image src={Discord} alt="Link to Discord" height={24} />
          </Link>
          <Link href="/">
            <Image src={Twitter} alt="Link to Twitter" height={24} />
          </Link>
          <Link href="/">
            <Image src={Matrix} alt="Link to Matrix" height={24} />
          </Link>
          <Link href="/">
            <Image src={GitHub} alt="Link to Github " height={24} />
          </Link>
          <Link href="/">
            <Image src={Website} alt="Link to Website" height={24} />
          </Link>
          </div>
        </div>
        <button className="mt-2 md:mt-0 border-2 rounded border-black hover:bg-gray-200 px-1 md:px-14 md:font-bold">
          Docs
        </button>
      </div>

      <p className="mt-2 md:mt-4 text-xs md:text-base">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.{" "}
      </p>
    </div>
  );
}
