import { useContext } from "react";
import { useRouter } from "next/router";

import Sidebar from "../components/ui/sidebar";
import Header from "../components/ui/header";
import Layout from "@/components/layout";
import UserContext from "@/store/userContext";
import LogIn from "@/components/login";

export default function Home() {
  const router = useRouter();

  const userCtx = useContext(UserContext);
  // userCtx.logInUser("Ivo");

  // function loadProject() {
  //   router.push("/")
  // }

  return userCtx.userLogged ? (
    <Layout>
    </Layout>
  ) : (
    <LogIn />
  );
}
