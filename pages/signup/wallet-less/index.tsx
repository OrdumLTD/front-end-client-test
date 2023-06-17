'use client'

import React, { useEffect, useState, useContext } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// PJs utils
import { web3FromAddress } from '@polkadot/extension-dapp';
import { mnemonicGenerate } from '@polkadot/util-crypto';
import keyring from '@polkadot/ui-keyring';
import { createApplicantProfile, onSignCertificate } from '@/lib/ContractFns/createProfile';
import { KeyringPair } from '@polkadot/keyring/types';
import { cryptoWaitReady } from '@polkadot/util-crypto';
import ChainApiContext from '@/store/apiContext';
import { CreateResult } from '@polkadot/ui-keyring/types';
import { OrdumAccountContext } from '@/store/walletLessSignUp';


function WalletLess() {

  //context
  const ChainCtx = useContext(ChainApiContext);
  const OrdumAccCtx = useContext(OrdumAccountContext)

  useEffect(()=>{
    ChainCtx.fetchPoc5Api();
  },[])

  interface userData {
    username: string,
    passcode: string,
    userPair?:CreateResult
  }

  const [data,setData] = useState<userData>();

  const registerUser =(toChange: userData)=>{
    // Store it in local storage
    setData({...data,...toChange})
  }

  // Dry run profile creation + Optional<Preimage>
  const dryRunAndFundAcc = async() =>{

    // Update KeyringPair for Ordum Account
    //@ts-ignore
    const {pair} = keyring.addUri(OrdumAccCtx.secret,OrdumAccCtx.password,{name:OrdumAccCtx.name})
    // Update to the store
    //@ts-ignore
    OrdumAccCtx.setKeyPair(pair)

    let api = ChainCtx.poc5;
    let address = data?.userPair?.pair.address;
    let ordumPair = OrdumAccCtx.keypair;
    
    if(api && address && ordumPair){
      const fundCall = api.tx.balances.transferKeepAlive(address,1000000000000);
      
      await fundCall?.signAndSend(ordumPair,({isFinalized,events})=>{
        if(isFinalized){
          console.log("balance transfered to new user")
          events.map(event =>{
            console.log(event.toHuman())
          })
        };
      })
    }
    
  }

  // Testing Wallet Less SignUp
  const walletLessSignup = async() =>{
      // Set local storage for users secret
        const userMnemonic = mnemonicGenerate(12);

        const userPair = keyring.addUri(userMnemonic,data?.passcode,{name:data?.username})
        //@ts-ignore
        setData(prevData =>({
          ...prevData,
          userPair:userPair
        }))
      
      
  };

  return (
    <main className="flex align-middle justify-center flex-row m-10">
     <Box 
         component="form"
         sx={{
           '& .MuiTextField-root': { m: 1, width: '25ch' },
           display:"flex",
           flexDirection:"column",
           alignItems:"center"
         }}
         noValidate
         autoComplete="off"
     >
      <div className="flex flex-col">

        <TextField
          required
          id="Username"
          label="username"
          //@ts-ignore
          onChange={(e) =>{registerUser({username:e.target.value})}}
        >

        </TextField>

        <TextField 
          required
          id="Passcode"
          label="passcode"
          //@ts-ignore
          onChange={(e) =>{registerUser({passcode:e.target.value})}}
        >

        </TextField>

      </div>
      <Button onClick={walletLessSignup}sx={{width:255, height:30, padding:1, marginBottom:3}} variant="outlined">Signup</Button>
      <Button onClick={dryRunAndFundAcc}sx={{width:255, height:30, padding:1}} variant="outlined">Activate Account</Button>

     </Box>

    </main>
  )
}

export default WalletLess