import { createContext, useState } from "react";


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
    durationL: "",
    shortDescription: "",
    whyDifferentDescription: "",
    externalLinks: "",
  },
  changeTLDR: function ({}) {},
  //Context o the Propolsal
  contextOfthePropolsal: {}
  // logOut: function () {},
  // userInfo: null, // {type(Organisation/indiviual), applicant(or Foundation) ,name, about, projectCategory, mission, links{}, teamMembers[]},
  // showUserInfo: function() {}
});

const TLDR = () => {};

export function PropolsalContextProvider(props) {
//   const [userLoggedIn, setUserLoggedIn] = useState(false);
//   const [userName, setUserName] = useState("Jack");

 const [step, setStep] = useState(2);

 function changeStepHandler(num) {
    setStep(num)
 }

  const context = {
    propolsalStep: step,
    changeToStep: changeStepHandler
  }

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
