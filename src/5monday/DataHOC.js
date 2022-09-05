import React, { useState } from "react";
import Main from "../tuesday/Main";

function DataHOC (WrappedComponent) {

    function WrappingComponent(props){

    const [user, setUser] = useState({id:1, name:"John"});

    const a = localStorage.getItem("user");
        return(
            <div>
                {a ? 
                <WrappedComponent number={props.number} data={user} setData={setUser}/>
                :
                <Main/>}
            </div>
        )
    }

    return WrappingComponent
}

export default DataHOC