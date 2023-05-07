import { createContext, use, useState } from "react";

const PropolsalContext = createContext({
  //   Propolsal Menu
  propolsalStep: 1,
  changeToStep: function (number) {},
  // Propolsal Data TLDR
  tldr: {
    account: "",
    projectType: "",
    track: "",
    contact: "",
    propolsalName: "",
    recieveDate: "",
    startingDate: "",
    fundingAmount: "",
    exchangeRate: 30,
    duration: "",
    shortDescription: "",
    whyDifferentDescription: "",
    externalLinks: "",
  },
  context: {
    howDidItComeToMind: "",
    howDoesItHelp: "",
    goal: "",
    whyKSM: "",
  },
  problemSolution: {},
  changeTLDR: function (arg) {},
  changeContext: function (arg) {},
  contextOfthePropolsal: {},
});

export function PropolsalContextProvider(props) {
  const [step, setStep] = useState(1);
  const [tldr, setTldr] = useState({
    acount: "5Fxn69X58NdsFqfaBdsiinaYvwYccBSiv64YRcG2N24bzPPv",
    projectType: "Governance",
    track: "",
    contact: "",
    propolsalName: "",
    recieveDate: 1, //
    startingDate: "",
    fundingAmount: 30,
    exchangeRate: "",
    duration: "",
    shortDescription: "",
    whyDifferentDescription: "",
    externalLinks: "",
  });

  const [propolsalContext, setPropolsalContext] = useState({
    howDidItComeToMind: "",
    howDoesItHelp: "",
    goal: "",
    whyKSM: "",
  });

  const changeTLDR = (itemToChange) => {
    setTldr({ ...tldr, ...itemToChange });
  };

  const changeContext = (itemToChange) => {
    setPropolsalContext({ ...propolsalContext, ...itemToChange });
  };

  function changeStepHandler(num) {
    setStep(num);
  }

  const context = {
    propolsalStep: step,
    changeToStep: changeStepHandler,
    tldr: tldr,
    changeTLDR: changeTLDR,
    context: propolsalContext,
    changeContext,
  };

  //   const context = {
  //     userLogged: userLoggedIn,
  //     userName: userName,
  //     logInUser: logInUserHandler,
  //     logOutUser: logOutUserHandler,
  //   };

  return (
    <PropolsalContext.Provider value={context}>
      {props.children}
    </PropolsalContext.Provider>
  );
}

export default PropolsalContext;
