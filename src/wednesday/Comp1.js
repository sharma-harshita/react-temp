import { cleanup } from "@testing-library/react";
import React , {useEffect, useState, useContext} from "react";
import { EmpContext } from "./EmpContext";

function Comp1(){
    const data = useContext(EmpContext)
    console.log(data);
    const [name, setName] = useState("John")
    // const [user, setUser] = useState({id:1, username:"Smith", age:45})

    // const updateAge = () => {
    //     setUser(prevState=>{
    //         return{
    //             ...prevState,
    //             age:prevState.age+10,
    //             username:"Doe"
    //         }
    //     })
    // }

    //mounting , updating
    useEffect(()=>{
        console.log("inside effect");
    })

    //mounting 
    useEffect(()=>{
        console.log("inside effect2");
    }, [])

    //unmounting stage 
    useEffect(()=>{
        return function cleanup(){

        }
    })
    return(
        <div>
            <h1>HOOKS</h1>

            {name}

            <button onClick={()=>setName("Doe")}> Modify state value</button>

            {/* <h2>User object Details</h2>
            {user.username} || {user.age}

            <button onClick={updateAge}>Increment Age</button> */}
        </div>
    )
}

export default Comp1;

// useState,
//             useEffect
//             useRef,
//             useContext,

//             useReducer,
//             useMemo,
//             useCallback