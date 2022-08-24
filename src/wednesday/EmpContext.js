import React, {useState, createContext} from "react";

export const EmpContext = createContext();

function ContextProvider (props){
    const [user, setUser] = useState({id:1, username:"Ram", age:45})
    const [user1, setUser1] = useState({id:1, username:"Ram", age:45})
    return(
        <EmpContext.Provider value={{user, setUser, user1, setUser1}}>
            {props.children}
        </EmpContext.Provider>
    )
}

export default ContextProvider