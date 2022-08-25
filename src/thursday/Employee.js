import React, {memo} from "react";

function Employee(props){
    console.log("Employee Component");
    return (
        <div>
            <h1>Employee Component {props.num}</h1>
            <h2>Refrential Equality</h2>
            <button onClick={props.handleFnc}>Click to call function</button>
        </div>
    )
}


// class Employee extends React.PureComponent{
//     render(){
//         console.log("Employee Component");
//         return (
//             <div>
//                 <h1>Employee Component {this.props.num}</h1>
//             </div>
//         )
//     }
// }

export default memo(Employee)
