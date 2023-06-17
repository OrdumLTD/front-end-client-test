import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useContext } from "react";

import { Mail, GitHub } from "react-feather";
import Discord from "../../assets/svg-icons/discord.svg";
import Twitter from "../../assets/svg-icons/twitter-icon.svg";
import Matrix from "../../assets/svg-icons/matrix.png";
import Website from "../../assets/svg-icons/global.png";
import { loadContract } from "@/lib/contractLoader";
//Context
import ContractContext from "@/store/contractContext";
import ProfileContext from "@/store/profileContext";


const CreateTeamPrifile = () => {
  // Context data
  const ProfileCtx = useContext(ProfileContext);
  const ContractCtx = useContext(ContractContext);
  console.log("Profile Team type "+ProfileCtx.profileData.teamType)
  console.log("Profile User type "+ProfileCtx.profileData.userType)
  // Custom data



  // Params
  

  const contractLoading = async() =>{
    const apiContract = await loadContract().catch(err => console.log("Error Connecting Contract: "+err));
    // Store into the context
    if(apiContract){
      ContractCtx.setContractApi(apiContract);
    }else{
      console.log("Didnt work connecting to contract")
    }
  }

 
  useEffect(() =>{
    contractLoading()
    console.log("Helo Contract")
  },[])

  console.log(ContractCtx?.contractApi?.abi)
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
                  ProfileCtx.profileData.teamType === "Organization"
                    ? "border rounded w-40 bg-black py-3 px-8 text-white text-xs"
                    : "border rounded w-40 bg-gray-400 py-3 px-8 text-white text-xs"
                }
                //@ts-ignore
                onClick={() => ProfileCtx.setProfile({teamType:"Organization"})}
              >
                Organization
              </button>
              <button
                className={
                  ProfileCtx.profileData.teamType === "Individual"
                    ? "border rounded w-40  ml-2 bg-black py-3 px-8 text-white text-xs"
                    : "border rounded w-40  ml-2 bg-gray-400 py-3 px-8 text-white text-xs"
                }
                //@ts-ignore
                onClick={() => ProfileCtx.setProfile({teamType:"Individual"})}
              >
                Individual
              </button>
            </div>
          </div>
          <div className="mt-8">
            <h3>Are you an Applicant or a Grant Issuer?</h3>
            <div className="mt-2 rounded bg-gray-200 py-2 flex space-around px-2">
              <button
                className={
                  ProfileCtx.profileData.userType === "Applicant"
                    ? "border rounded w-40 bg-black py-3 px-8 text-white text-xs"
                    : "border rounded w-40 bg-gray-400 py-3 px-8 text-white text-xs"
                }
                //@ts-ignore
                onClick={() => ProfileCtx.setProfile({userType:"Applicant"})}
              >
                Applicant
              </button>
              <button
                className={
                  ProfileCtx.profileData.userType === "Grant Issuer"
                    ? "border rounded w-40  ml-2 bg-black py-3 px-8 text-white text-xs"
                    : "border rounded w-40  ml-2 bg-gray-400 py-3 px-8 text-white text-xs"
                }
                //@ts-ignore
                onClick={() => ProfileCtx.setProfile({userType:"Grant Issuer"})}
              >
                Grant Issuer
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
                value={ProfileCtx.profileData.teamName}
                onChange={(e) => {
                  //@ts-ignore
                 ProfileCtx.setProfile({teamName:e.target.value})
                }}
              />
            </div>
            <div className="mt-4 md:w-5/12">
              <label>About</label>
              <textarea
                className="mt-2 w-full resize-none h-40 text-sm bg-white placeholder:font-italitc border border-black rounded focus:outline-none break-all"
                placeholder="What is the name of your team?"
                value={ProfileCtx.profileData.description}
                onChange={(e) => {
                   //@ts-ignore
                 ProfileCtx.setProfile({description:e.target.value})
                }}
              />
            </div>
            <div className="mt-4 md:w-5/12">
              <label>Project Type</label>
              <select
                className="mt-2 w-full text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-2 pr-4 focus:outline-none"
                placeholder="Choose a category"
                onChange={(e) => {
                   //@ts-ignore
                 ProfileCtx.setProfile({projectType:e.target.value})
                }}
              >
                {/* This should be a list and a fn adding the type to the list */}
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
              <label>Resident Chain</label>
              <select
                className="mt-2 w-full text-sm bg-white placeholder:font-italitc border border-black rounded py-2 pl-2 pr-4 focus:outline-none"
                placeholder="Choose a resident Chain"
                onChange={(e) => {
                   //@ts-ignore
                 ProfileCtx.setProfile({residentChain:e.target.value})
                }}
              >
                <option value="" className="" disabled selected hidden>
                  Select your option
                </option>
                <option value="Polkadot">Governance</option>
                <option value="Kusama">Defi</option>
                <option value="Phala Network">Communication</option>
                <option value="Moonbeam">Privacy</option>
                <option value="Cosmos">Education</option>
                <option value="Arweave">Events</option>
               
              </select>
            </div>
            <div className="mt-4 md:w-5/12">
              <label>Mission</label>
              <textarea
                className="mt-2 w-full resize-none h-36 text-sm bg-white placeholder:font-italitc border border-black rounded focus:outline-none break-all"
                placeholder="What does your team want to achieve?"
                value={ProfileCtx.profileData.mission}
                onChange={(e) => {
                   //@ts-ignore
                 ProfileCtx.setProfile({mission:e.target.value})
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
                Save and Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTeamPrifile;
