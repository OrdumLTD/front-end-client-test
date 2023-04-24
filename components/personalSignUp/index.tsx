import Layout from "@/components/layout";
import { useState } from "react";
import Introduction from "./introduction";
import ActiveProjects from "./activeprojects"
import PreviousProjects from "./previousprojects"

const PersonalSignUp = () => {
  enum step {
    Introduction,
    ActiveProojects,
    PreviousProjects,
  }

  const [signUpMenu, setSignUpMenu] = useState(step.Introduction);

  function goToActiveProjects() {
    setSignUpMenu(step.ActiveProojects)
  }

  function goToPreviousProjects() {
    setSignUpMenu(step.PreviousProjects)
  }



  return (
    <div className="ml-16 flex w-screen">
      <div className="w-64">
        <ol className="flex flex-col gap-2 text-gray-500">
          <li>
            <button
              className={signUpMenu === step.Introduction ? "font-bold" : ""}
              onClick={() => setSignUpMenu(step.Introduction)}
            >
              1. Introdction
            </button>
          </li>
          <li>
            <button
              className={signUpMenu === step.ActiveProojects ? "font-bold" : ""}
              onClick={() => setSignUpMenu(step.ActiveProojects)}
            >
              2. Active Projects
            </button>
          </li>
          <li>
            <button
              className={
                signUpMenu === step.PreviousProjects ? "font-bold" : ""
              }
              onClick={() => setSignUpMenu(step.PreviousProjects)}
            >
              3. Previous Projects
            </button>
          </li>
        </ol>
      </div>
      <div className="ml-16 w-full">
        {signUpMenu === step.Introduction ? <Introduction next={goToActiveProjects}/> : null}
        {signUpMenu === step.ActiveProojects ? <ActiveProjects next={goToPreviousProjects} /> : null}
        {signUpMenu === step.PreviousProjects ? <PreviousProjects /> : null}
      </div>
    </div>
  );
};

export default PersonalSignUp;
