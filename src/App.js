import React, {Component} from "react";
import Parent from "./monday/Parent";
import Company from "./thursday/Company";
import UseMemoExp from "./thursday/UseMemoExp";
import Main from "./tuesday/Main";
import Comp1 from "./wednesday/Comp1";
import ContextProvider from "./wednesday/EmpContext";
class App extends Component{
  render(){
    return(
      <>
        {/* <Parent/> */}
        {/* <Main/> */}
       {/* <ContextProvider>
        <Comp1/>
       </ContextProvider> */}

       {/* <Company/> */}
       <UseMemoExp/>
      </>
    )
  }
}

export default App
