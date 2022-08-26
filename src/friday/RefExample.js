import React , {useRef, useState} from "react";
import RefExampleChild from "./RefExampleChild";

function RefExample(){
    const [name , setName] = useState(null);

    const nameRef = useRef("");
    const ageRef = useRef(null);

    const handleNameChange = () => {
        setName(nameRef.current.value)
    }

    const ref = {nameRef, ageRef}

    console.log(name, nameRef);
    return(
        <div>
            <h1>useRef</h1>
            <input type="text" ref={nameRef}/>
            <button onClick={handleNameChange}>Click</button>
            {nameRef && <RefExampleChild name = {name} ref = {ref}/>}
            {name}
        </div>
    )
}

export default RefExample