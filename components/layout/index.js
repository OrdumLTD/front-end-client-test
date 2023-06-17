import { useEffect, useState, useContext } from "react";
import ChainApiContext from "@/store/apiContext";
import Header from "./header";
import Sidebar from "./sidebar";
import '@polkadot/api-augment/kusama';



// Connect to the chain Api in the Home page

//1. test queries
import { useRouter } from 'next/router';


export default function Layout(props) {
  const ChainAPICtx = useContext(ChainApiContext);
  
  useEffect(()=>{
    ChainAPICtx.fetchChainApi()
  },[])

  
  const router = useRouter();
  if(router.pathname === "/"){
    router.push("/dashboard")
  }else{
    console.log("NotHome")
  }
  console.log(router.pathname)

  return (
    <main className="flex flex-col h-screen ">
      <div className="flex flex-1 overflow-hidden">
        <div className="flex flex-1 overflow-hidden">
          <div className="flex">
            <Sidebar />
          </div>
          <div className="flex flex-1 flex-col">
            <Header />
            <div className="flex flex-1 overflow-y-auto overflow-hidden paragraph ">
              <div className="ml-8 md:ml-20">{props.children}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
