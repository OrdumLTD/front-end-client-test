// ToDo Fit for mobile

import { useContext, useState } from "react";
import Link from "next/link";
// import { Link } from "react-router-dom";

import SignUpContext from "@/store/signUpContext";
import TeamMember from "./TeamMember";

const AddTeamMembers = () => {
  const SignUpCtx = useContext(SignUpContext);
  const [teamMembers, setTeamMembers] = useState<number>(1);
  const [arrayOfTeamMembers, setArrayOfTeamMembers] = useState<String[]>();

  const addTeamMember = () => {
    setTeamMembers(teamMembers + 1);
  };

  // const removeTeamMember = () => {
  //   setTeamMembers(teamMembers - 1)
  // }

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
              <TeamMember />
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
            Save and close
          </button>
        </Link>
        <button className="mt-4 border bg-gray-400 text-white w-full py-3 text-lg">
          Back
        </button>
      </div>
    </div>
  );
};

export default AddTeamMembers;
