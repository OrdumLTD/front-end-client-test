import { ApiPromise, WsProvider } from '@polkadot/api';
import React, {createContext, useState, ReactNode} from 'react';

// Chain API context

interface ChainAPIContextInterface {
    api?:ApiPromise,
    poc5?:ApiPromise
    fetchChainApi: () => void;
    fetchPoc5Api:() => void;
}

type Props = {
    children: ReactNode;
};

const defaultState = {
    api: undefined,
    poc5: undefined,
    fetchChainApi: () => {return},
    fetchPoc5Api:() =>{return}
}

const ChainApiContext = createContext<ChainAPIContextInterface>(defaultState);

// const ChainApiContext = createContext({
//     //Variables and Functions
//     api:ApiPromise,
//     chainApiFunction: function():void{}
    
// })

export const ChainAPIContextProvider = ({children}: Props ) =>{
    const [apiConnect, setApiConnect] = useState<ApiPromise>();
    const [poc5,setPoc5] = useState<ApiPromise>();


    const fetchChainApi = async() =>{
        let wsProvider = new WsProvider('ws://127.0.0.1:8000');
        let chain_api = await ApiPromise.create({provider:wsProvider});
        chain_api.isReady
        setApiConnect(chain_api);
        console.log("Connected to Kusama")
    }

    const fetchPoc5Api = async() =>{
        let wsProvider = new WsProvider('wss://poc5.phala.network/ws');
        let chain_api = await ApiPromise.create({provider:wsProvider});
        chain_api.isReady
        setPoc5(chain_api);
        console.log("Connected to Poc5")
    }

    const context = {
        api:apiConnect,
        poc5,
        fetchChainApi,
        fetchPoc5Api
    }
    return (
       <ChainApiContext.Provider value ={context}>
         {children}
       </ChainApiContext.Provider>
    );
}

export default ChainApiContext;


// Contract API context