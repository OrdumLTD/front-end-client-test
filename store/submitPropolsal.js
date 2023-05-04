import { createContext, use, useState } from "react";

const PropolsalContext = createContext({
  //   Propolsal Menu
  propolsalStep: 1,
  changeToStep: function (number) {},
  // Propolsal Data TLDR
  tldr: {
    accountType: "",
    projectType: "",
    track: "",
    contact: "",
    propolsalName: "",
    date: "",
    fundingAmount: "",
    exchangeRate: "",
    duration: "",
    shortDescription: "",
    whyDifferentDescription: "",
    externalLinks: "",
  },
  changeTLDR: function (arg) {},
  contextOfthePropolsal: {},
});

export function PropolsalContextProvider(props) {

  const [step, setStep] = useState(1);
  const [tldr, setTldr] = useState({
    accountType: "Ordum",
    projectType: "Governance",
    track: "",
    contact: "",
    propolsalName: "",
    date: "",
    fundingAmount: "",
    exchangeRate: "",
    duration: "",
    shortDescription: "",
    whyDifferentDescription: "",
    externalLinks: "",
  });

  const changeTLDR = (itemToChange) => {
    setTldr({...tldr, ...itemToChange})
  }

  function changeStepHandler(num) {
    setStep(num);
  }

  const context = {
    propolsalStep: step,
    changeToStep: changeStepHandler,
    tldr: tldr,
    changeTLDR: changeTLDR
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
