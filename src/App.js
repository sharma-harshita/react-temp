import React, {Component} from "react";
import Temp from "./5monday/Temp";
import RefExample from "./friday/RefExample";
import Parent from "./monday/Parent";
import ReducerHook from "./saturday/reducerHook";
// import Company from "./thursday/Company";
// import UseMemoExp from "./thursday/UseMemoExp";
import Main from "./tuesday/Main";
import Comp1 from "./6tuesday/Comp1";
import ContextProvider from "./wednesday/EmpContext";

class App extends Component{
  render(){
    return(
      <>
      {/* <Temp number = {1}/> */}
        {/* <Parent/> */}
        {/* <Main/> */}
       {/* <ContextProvider>
        <Comp1/>
       </ContextProvider> */}

       {/* <Company/> */}
       {/* <UseMemoExp/> */}

       {/* <RefExample/> */}
       {/* <ReducerHook/> */}
       <Comp1/>
      </>
    )
  }
}

export default App
