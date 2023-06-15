// ToDo Fit for mobile

import { useContext, useState } from "react";
import Link from "next/link";

import TeamMember from "./TeamMember";
import ProfileContext from "@/store/profileContext";
import { AccountId, MemberRole } from "@/lib/contractTypes/ordumTypes";


export interface Member {
  acc:AccountId,
  role:MemberRole
}

const AddTeamMembers = () => {
   // Custom types
  
  const defaultMember:Member ={
    acc:"",
    role:MemberRole.regular
  }

  // Context
  const ProfileCtx = useContext(ProfileContext);
  //--------------------------------------------------
  const [teamMembers, setTeamMembers] = useState<number>(1);
  const [membersNRole, setMembersNRole] = useState<Array<[AccountId,MemberRole]>>([]);
  const [members, setMembers] = useState<Member>(defaultMember)
  

  const addMember =(v:Member) =>{
      setMembers({...members,...v})
  }


  const addTeamMember = () => {
    const memberData:[AccountId,MemberRole]= [members.acc,members.role]; 
    setMembersNRole((prevData) => [...prevData,memberData])
    setMembers(defaultMember)
    setTeamMembers(teamMembers + 1);
  };
  
  // Contract Call for Crreating Profile
  
  

  return (
    <div className="font-space-grotesk grid h-screen place-items-center relative mb-20">
      <div className="absolute insext-x-0 top-20 max-w-xl">
        <h1 className="text-4xl font-medium mb-4">Add team members</h1>
        <p className="paragraph mb-12">
          Add your team and send them wallet invitations. Remember to add your
          own personal wallet if the one you logged in with is a multi sig or
          belongs to an organisation.
        </p>
        <p className="">Member Wallet address</p>
        <ul>
          {[...Array(teamMembers)].map((e, i) => (
            
            <li className="mb-2" key={i}>
              <TeamMember member={membersNRole} key={i -1} setMember={addMember} />
            </li>
          ))}
        </ul>
        <button
          onClick={addTeamMember}
          className="mt-2 border border-black w-full py-3 text-lg"
        >
          Add More
        </button>
        <Link href="/dashboard">
          <button className="mt-4 border bg-black text-white w-full py-3 text-lg">
            Save and Done
          </button>
        </Link>
        <button className="mt-4 border bg-gray-400 text-white w-full py-3 text-lg">
        <Link href="/createteamprofile">
          Back
        </Link> 
        </button>
      </div>
    </div>
  );
};

export default AddTeamMembers;
