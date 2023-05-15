import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useContext } from "react";

import SignUpContext from "@/store/signUpContext";

import { Mail, GitHub } from "react-feather";
import Discord from "../../assets/svg-icons/discord.svg";
import Twitter from "../../assets/svg-icons/twitter-icon.svg";
import Matrix from "../../assets/svg-icons/matrix.png";
import Website from "../../assets/svg-icons/global.png";

const CreateTeamPrifile = () => {
  const SignUpCtx = useContext(SignUpContext);

  const [teamType, setTeamType] = useState("Organization");
  const [applicantType, setAppicantType] = useState("Applicant");

  // const { user } = useSelector((state: RootState) => state.user);
  // const dispatch = useDispatch();

  // const logInTest = () => {
  //   dispatch(logInTestUser());
  // };
  return (
    <div className="font-space-grotesk grid h-screen place-items-center">
      <div className="grid place-items-start pt-20 pl-4 md:pl-80 md:pl-96">
        <div className="flex flex-col">
          <div>
            <h1 className="md:text-5xl font-medium">Sign Up</h1>
            <p className="mt-2 text-sm">Create your profile</p>
          </div>
          <div className="mt-8">
            <h3>Are you an organisation or an individual?</h3>
            <div className="mt-2 rounded bg-gray-200 py-2 flex space-around px-2">
              <button
                className={
                  teamType === "Organization"
                    ? "border rounded w-40 bg-black py-3 px-8 text-white text-xs"
                    : "border rounded w-40 bg-gray-400 py-3 px-8 text-white text-xs"
                }
                onClick={() => setTeamType("Organization")}
              >
                Organization
              </button>
              <button
                className={
                  teamType === "Individual"
                    ? "border rounded w-40  ml-2 bg-black py-3 px-8 text-white text-xs"
                    : "border rounded w-40  ml-2 bg-gray-400 py-3 px-8 text-white text-xs"
                }
                onClick={() => setTeamType("Individual")}
              >
                Individual
              </button>
            </div>
          </div>
          <div className="mt-8">
            <h3>Are you a applicant or a foundation?</h3>
            <div className="mt-2 rounded bg-gray-200 py-2 flex space-around px-2">
              <button
                className={
                  applicantType === "Applicant"
                    ? "border rounded w-40 bg-black py-3 px-8 text-white text-xs"
                    : "border rounded w-40 bg-gray-400 py-3 px-8 text-white text-xs"
                }
                onClick={() => setAppicantType("Applicant")}
              >
                Applicant
              </button>
              <button
                className={
                  applicantType === "Foundation"
                    ? "border rounded w-40  ml-2 bg-black py-3 px-8 text-white text-xs"
                    : "border rounded w-40  ml-2 bg-gray-400 py-3 px-8 text-white text-xs"
                }
                onClick={() => setAppicantType("Foundation")}
              >
                Foundation
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-8 md:mt-12 md:w-screen flex flex-col">
            <div className="md:w-5/12">
              <label>Team Name</label>
              <input
                className="mt-2 w-full text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-2 pr-4 focus:outline-none"
                placeholder="What is the name of your team?"
                type="text"
                value={SignUpCtx?.teamName}
                onChange={(e) => {
                  SignUpCtx.setName(e.target.value);
                }}
              />
            </div>
            <div className="mt-4 md:w-5/12">
              <label>About</label>
              <textarea
                className="mt-2 w-full resize-none h-40 text-sm bg-white placeholder:font-italitc border border-black rounded focus:outline-none break-all"
                placeholder="What is the name of your team?"
                value={SignUpCtx?.description}
                onChange={(e) => {
                  SignUpCtx.setDescription(e.target.value);
                }}
              />
            </div>
            <div className="mt-4 md:w-5/12">
              <label>Project Type</label>
              <select
                className="mt-2 w-full text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-2 pr-4 focus:outline-none"
                placeholder="Choole a category"
                onChange={(e) => {
                  SignUpCtx.setProjectType(e.target.value);
                }}
              >
                <option value="" className="" disabled selected hidden>
                  Select your option
                </option>
                <option value="Governance">Governance</option>
                <option value="Defi">Defi</option>
                <option value="Communication">Communication</option>
                <option value="Privacy">Privacy</option>
                <option value="Education">Education</option>
                <option value="Events">Events</option>
                <option value="Infrastracture">Infrastracture</option>
                <option value="Art">Art</option>
                <option value="Media">Media</option>
                <option value="NFT">NFT</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mt-4 md:w-5/12">
              <label>Mission</label>
              <textarea
                className="mt-2 w-full resize-none h-36 text-sm bg-white placeholder:font-italitc border border-black rounded focus:outline-none break-all"
                placeholder="What does your team want to achieve?"
                value={SignUpCtx?.mission}
                onChange={(e) => {
                  SignUpCtx.setMission(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="mt-10 w-5/12">
            <h3 className="mb-4">Links</h3>
            <div className="flex">
              <Mail size="40" />{" "}
              <input
                className="ml-5 w-full text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-4 pr-4 focus:outline-none"
                placeholder="Email"
                type="text"
              />
            </div>
            <div className="mt-4 flex">
              <Image src={Discord} alt="Discord" height={25} />{" "}
              <input
                className="ml-5 w-full text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-4 pr-4 focus:outline-none"
                placeholder="Discord"
                type="text"
              />
            </div>
            <div className="mt-4 flex">
              <Image src={Twitter} alt="Twitter" />{" "}
              <input
                className="ml-5 w-full text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-4 pr-4 focus:outline-none"
                placeholder="Twitter"
                type="text"
              />
            </div>

            <div className="mt-4 flex">
              <Image src={Matrix} alt="Matrix" />{" "}
              <input
                className="ml-5 w-full text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-4 pr-4 focus:outline-none"
                placeholder="Matrix"
                type="text"
              />
            </div>
            <div className="mt-4 flex">
              <Image src={Website} alt="Website" />{" "}
              <input
                className="ml-5 w-full text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-4 pr-4 focus:outline-none"
                placeholder="Website"
                type="text"
              />
            </div>
            <div className="mt-4 flex">
              <GitHub size="40" />
              <input
                className="ml-5 w-full text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-4 pr-4 focus:outline-none"
                placeholder="Github"
                type="text"
              />
            </div>

            <Link href="/addteammembers">
              <button className="mt-10 py-3 border bg-black text-white w-full text-lg mb-20">
                Save and close
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTeamPrifile;
