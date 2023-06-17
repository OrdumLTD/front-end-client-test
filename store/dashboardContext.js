import { createContext, useState } from "react";

const DashboardContext = createContext({
    //   Propolsal Menu
    menuItem: 1,
    changeToStep: function (number) {},
    // Propolsal Data TLDR
    step: ""
  });
  
  export function DashboardContextProvider(props) {
    const [step, setStep] = useState(1);
  
    function changeStepHandler(num) {
        setStep(num);
      }

    const context = {
        menuItem: step,
        changeToStep: changeStepHandler
    };
  

  
    return (
      <DashboardContext.Provider value={context}>
        {props.children}
      </DashboardContext.Provider>
    );
  }
  
  export default DashboardContext;
  