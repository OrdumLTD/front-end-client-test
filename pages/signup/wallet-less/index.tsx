import React, { useEffect, useState } from 'react'
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


function WalletLess() {

  interface userData {
    username: string,
    passcode: string
  }

  interface OrdumAcc {
    secret: string,
    password: string
  }
  const defaultOrdum:OrdumAcc ={
    secret:"",
    password:""
  }

  const [data,setData] = useState<userData>();
  // Ordum Pirvate keys
  const [ordumAcc, setOrdumAcc] = useState<OrdumAcc>(defaultOrdum);

  // Store the Ordum Account
  const [keypair,setKeyPair] = useState<KeyringPair>();

  // Fetch account
  const [name, setName] = useState<string>("");
  const [addr, setAddr] = useState<string>("");

  const fetchOrdum = () =>{
    const accounts = keyring.getAccounts();

    accounts.forEach(({ address, meta, publicKey }) =>{
      if(meta.name == name){
        setAddr(address)
      }
    })
  
  }

  const addOrdumAccc = (ordum:OrdumAcc) =>{
    setOrdumAcc({...ordumAcc,...ordum});
    //add the account to the keyring
  }


  
  const OrdumAdd = () =>{
    cryptoWaitReady().then(() => {
      // load all available addresses and accounts
      keyring.loadAll({ ss58Format: 42, type: 'sr25519' });
    
      // additional initialization here, including rendering
      const { pair} = keyring.addUri(ordumAcc?.secret,ordumAcc?.password,{ name: "Ordum" });
      //@ts-ignore
      setKeyPair(pair)
    });
    
  }

  const registerUser =(toChange: userData)=>{
    setData({...data,...toChange})
  }

  // Dry run profile creation + Optional<Preimage>
  const dryCreateProfile = async() =>{

  }

  // Testing Wallet Less SignUp
  const walletLessSignup = async() =>{
      const userMnemonic = mnemonicGenerate(12);
      
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
      <Button onClick={walletLessSignup}sx={{width:255, height:30, padding:1}} variant="outlined">Signup</Button>
     </Box>

     <Box 
       component="form"
       sx={{
         '& .MuiTextField-root': { m: 1, width: '25ch' },
         display:"flex",
         flexDirection:"column",
         alignItems:"center"}}
     >
        {/* Testing for Ordum Secret input for initial setup */}
        Classified
        <div className="flex flex-col">
        <TextField 
          required
          id="secret"
          label="secret"
          //@ts-ignore
          onChange={(e) =>{addOrdumAccc({secret:e.target.value})}}
        >

        </TextField>

        <TextField 
            required
            id="password"
            label="password"
            //@ts-ignore
            onChange={(e) =>{addOrdumAccc({password:e.target.value})}}
        >
          
        </TextField>
        </div>
        <Button onClick={OrdumAdd}sx={{width:255, height:30, padding:1}} variant="outlined">Add Ordum Account</Button>
        <h3>{keypair?.address}</h3>
     </Box>

     {/* fetch Ordum Account */}
     <Box 
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          display:"flex",
          flexDirection:"column",
          alignItems:"center"
        }}
        noValidate
     >
      Fetch Ordum Account
     <TextField 
            required
            id="ordum-name"
            label="ordum-name"
            //@ts-ignore
            onChange={(e) =>{setName(e.target.value)}}
        >
      </TextField>
      <Button 
          onClick={fetchOrdum}sx={{width:255, height:30, padding:1}} variant="outlined"
          >ordum</Button>
        <h2>{addr}</h2>
     </Box>
    </main>
  )
}

export default WalletLess