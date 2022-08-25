import React, { useState, useMemo } from "react";

function UseMemoExp(){

    const [numbers, setNumbers] = useState([1,2,3,4,5])
    const [a, setA] = useState(10)

    function max () {
        console.log("Max function");
        return Math.max(...numbers)
    }

    const memoMax =  useMemo(()=>max(), [])

    const changeA = () => {
        console.log("State change function");
        setA( 40 );
    }

    return(
        <div>
            <h1>UseMemo example</h1>
            <h2>Value of a variable = {a}</h2>
            <button onClick={changeA}>Change A state variable</button>
            <h2>Max Value</h2>
            {memoMax}

            <button onClick={()=> setNumbers([23,46,24567,2367532,1345])}>Change Num state variable</button>

        </div>
    )
}

export default UseMemoExp;