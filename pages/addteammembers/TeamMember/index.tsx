import ProfileContext from "@/store/profileContext";
import { useContext, useState } from "react";
import { AccountId, MemberRole } from "@/lib/contractTypes/ordumTypes";
import { Member } from "..";

//@ts-ignore
const TeamMember = ({member,setMember, key}) => {
  const ProfileCtx = useContext(ProfileContext);



  return (
    <div className="flex ">
      <input
        type="text"
        placeholder="Confirming team member identity+send invite "
        className="
             w-screen
             mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500
               "
        value={member[key]?.acc}
        onChange={(e)=> setMember({acc:e.target.value})}
      />

      <select
        onChange={(e)=>setMember({role:e.target.value})}
        className="
            ml-2 
             mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500
               "
      >
        <option value="" className="" disabled selected hidden>
          Role
        </option>
        <option value={MemberRole.admin}>{MemberRole.admin}</option>
        <option value={MemberRole.regular}>{MemberRole.regular}</option>
      </select>
    </div>
  );
};

export default TeamMember;
