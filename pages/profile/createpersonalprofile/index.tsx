import Layout from "@/components/layout";
import PersonalSignUp from "@/components/personalSignUp";

import circle from "@/assets/svg-icons/plus-circle.svg";

const CreatePersonalProfile = () => {
  return (
    <Layout>
      <div className="font-space-grotesk flex flex-col w-screen ">
        {/* Banner */}
        <div className="h-40 md:h-60 bg-emerald-500"></div>
        {/* Company info and social */}
        <nav className="flex navbar bg-white relative mb-8 md:mb-16">
          <div className="ml-2 md:ml-16 w-full flex ">
            <div
              className="
       -mt-5 ml-60 h-14 w-14
       md:-mt-8 md:h-24 md:w-24
       border-2
       bg-black rounded-full text-white"
            >
   
            </div>
            <div className="ml-1 md:ml-5 md:mt-2 flex flex-col">
              <span className="md:text-xl">Sign Up</span>
              <span className="text-xs md:text-sm">Create your profile</span>
            </div>
          </div>
        </nav>
        <PersonalSignUp />
      </div>
    </Layout>
  );
};

export default CreatePersonalProfile;
