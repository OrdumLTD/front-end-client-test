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
import WalletLessUserContext, { OrdumAccountContext } from '@/store/walletLessSignUp';



function Settings() {
    // Wallet-Less user Context
    const WalletLessCtx = useContext(WalletLessUserContext);

    const OrdumAccCtx = useContext(OrdumAccountContext); 

    const [secret, setSecret] = useState<string>();
    const [password, setPassword] = useState<string>();

    const updateOrdum = ()=>{
        //@ts-ignore
        OrdumAccCtx.setSecret(secret)
        //@ts-ignore
        OrdumAccCtx.setPassword(password)
    }

  return (
    <main className="flex align-middle justify-center flex-row m-10">

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
          onChange={(e) =>{setSecret(e.target.value)}}
        >

        </TextField>

        <TextField 
            required
            id="password"
            label="password"
            //@ts-ignore
            onChange={(e) =>{setPassword(e.target.value)}}
        >
          
        </TextField>
        </div>
        <Button onClick={updateOrdum}sx={{width:255, height:30, padding:1}} variant="outlined">Add Ordum Account</Button>
        <h3>{OrdumAccCtx.keypair?.address}</h3>
     </Box>

    </main>
  )
}

export default Settings