import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

import Sidebar from "../components/ui/sidebar";
import Header from "../components/ui/header";
import Layout from "@/components/layout";
import UserContext from "@/store/userContext";
import WalletContext from "@/store/walletContext"
import LogIn from "@/components/login";

export default function Home() {
  const router = useRouter();

  const walletCtx = useContext(WalletContext);
  // userCtx.logInUser("Ivo");

  // function loadProject() {
  //   router.push("/")
  // }

  return walletCtx.selectedAccount ? (
    
    <Layout>
      {console.log("asd")}
    </Layout>
  ) : (
    <LogIn />
  );
}
