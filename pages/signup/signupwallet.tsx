import { Connect } from "@/components/wallet/polkadotjs/connect";
import { SignUpConnect } from "@/components/wallet/polkadotjs/signUpConnect";
import { onSignCertificate } from "@/lib/ContractFns/createProfile";
import ChainApiContext from "@/store/apiContext";
import ContractContext from "@/store/contractContext";
import WalletContext from "@/store/walletContext";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

// /createteamprofile

const SignUpWallet = () => {
  const router = useRouter();
  const WalletCtx = useContext(WalletContext);
  const ContractCtx = useContext(ContractContext);
  const ChainApiCtx = useContext(ChainApiContext);
  // const { user } = useSelector((state: RootState) => state.user);
  // const dispatch = useDispatch()

  // const logInTest = () => {
  //   dispatch(logInTestUser())
  // } 
  
  // Connect the contract
  useEffect(()=>{
    ChainApiCtx.fetchPoc5Api();
  },[])

  return (
    <div className="font-space-grotesk grid h-screen place-items-center">
      <div className="-mt-96 grid place-items-center border px-10 py-5 md:px-40 md:py-20">
        <h1 className="md:text-5xl mb-10">Sign up</h1>

        {/* <Link href="/createteamprofile"><button className="w-60 border border-gray-400 hover:bg-gray-200 py-2.5">Wallet 1</button></Link>
        <div className="my-1 md:my-2"></div>
        <Link href="/createteamprofil"><button className="w-60 border border-gray-400 hover:bg-gray-200 py-2.5">Wallet 2</button></Link>
        <div className="my-1 md:my-2"></div>
        <Link href="/createteamprofil"><button className="w-60 border border-gray-400 hover:bg-gray-200 py-2.5">Wallet 3</button></Link> */}

       <Connect/>
       {
          WalletCtx.selectedAccount && ChainApiCtx.poc5 &&WalletCtx.wallet ? 
          (<Button
            variant="outlined"
            size="small"   
              className=" mt-2 border border-black p-0.5"
              
              onClick={async() => {
                const certData = await onSignCertificate(
                  //@ts-ignore
                  ChainApiCtx.poc5,
                  WalletCtx.wallet,
                  WalletCtx.selectedAccount
                  );
                ContractCtx.signCert(certData)  
                router.push("/createteamprofile");
              }}
          >
            Sign Up
          </Button>)
          :
          (
            <Button
              variant="outlined"
              size="small"   
              disabled
              className=" mt-2 border border-black p-0.5"
              onClick={() => {
                router.push("/createteamprofile");
              }}
            >
             Sign Up
           </Button>)
        }
       
      </div>
      {/* <div className="-mt-80 flex flex-col">
        <h2 className="md:text-5xl mb-10">New To Blockchain? Create Wallet</h2>
        <button className="border border-gray-400 py-2.5 w-6/12 item-center ml-16 md:ml-48">
          Create Wallet
        </button>
      </div> */}
    </div>
  );
};

export default SignUpWallet;
