// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../../redux/store";
// import { logInTestUser } from "../../redux/userSlice"
// import Link from "next/link";
import { PropolsalContextProvider } from "@/store/submitPropolsal";

import Layout from "@/components/layout";
import SubmitPropolsalSidePanel from "@/components/submitProposal/sidePanel";

const submitProposalIndex = () => {
  // const { user } = useSelector((state: RootState) => state.user);
  // const dispatch = useDispatch()
  //---------------------------------------------------------

    //1.  When it renders we connect to the API;
    //2. Store the api instance to the contextApi






  //---------------------------------------------------------
  // const logInTest = () => {
  //   dispatch(logInTestUser())
  // }
  return (
    <PropolsalContextProvider>
      <Layout>
        <div className="">
          <SubmitPropolsalSidePanel />
        </div>
      </Layout>
    </PropolsalContextProvider>
  );
};

export default submitProposalIndex;
