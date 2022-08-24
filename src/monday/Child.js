import React from "react"

function Child(props){
    return (
        <div>
            <h1>Child Component</h1>
            <span>Name{props.name}</span>
            <br/>
            {props.salary < 40000 ? <span>Salary{props.salary}</span> : <span>Salary  : cant be displayed</span>}

            <button onClick={()=>props.updateSalary(90)}>Modify Age</button>
        </div>
    )
}

export default Child