import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DataHOC from "./DataHOC";

function Temp(props){
    const navigate = useNavigate();

    function hanldeLogout(){
        localStorage.removeItem("user");
        navigate("/")
    }

    return(
        <div>
            <h1>temp Component</h1>
            <button onClick={hanldeLogout()}>Logout</button>
        </div>
    )
}

export default DataHOC(Temp)