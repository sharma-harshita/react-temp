import React, {Component} from "react";
import RefExample from "./friday/RefExample";
import Parent from "./monday/Parent";
import ReducerHook from "./saturday/reducerHook";
// import Company from "./thursday/Company";
// import UseMemoExp from "./thursday/UseMemoExp";
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
       {/* <UseMemoExp/> */}

       {/* <RefExample/> */}
       <ReducerHook/>
      </>
    )
  }
}

export default App
