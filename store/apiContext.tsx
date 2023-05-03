import { ApiPromise, WsProvider } from '@polkadot/api';
import React, {createContext, useState, ReactNode} from 'react';

// Chain API context

interface ChainAPIContextInterface {
    api:ApiPromise | undefined,
    fetchChainApi: () => void;
}

type Props = {
    children: ReactNode;
};

const defaultState = {
    api: undefined,
    fetchChainApi: () => {return},
}

const ChainApiContext = React.createContext<ChainAPIContextInterface>(defaultState);

// const ChainApiContext = createContext({
//     //Variables and Functions
//     api:ApiPromise,
//     chainApiFunction: function():void{}
    
// })

export const ChainAPIContextProvider = ({children}: Props ) =>{
    const [apiConnect, setApiConnect] = useState<ApiPromise>();

    const fetchChainApi = async() =>{
        let wsProvider = new WsProvider('ws://127.0.0.1:8000');
        let chain_api = await ApiPromise.create({provider:wsProvider});
        chain_api.isReady
        setApiConnect(chain_api);
        console.log("Connect wheeuuuh")
    }

    const context = {
        api:apiConnect,
        fetchChainApi: fetchChainApi
    }
    return (
       <ChainApiContext.Provider value ={context}>
         {children}
       </ChainApiContext.Provider>
    );
}

export default ChainApiContext;


// Contract API context