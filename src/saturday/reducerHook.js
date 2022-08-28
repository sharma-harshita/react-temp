import React, {useReducer} from "react";

function ReducerHook (){

    const masterStateUpdate = (state, action) => {
        switch (action.type) {
            case "CHANGE_NAME":
                return{
                    ...state,
                    name:action.name,
                    age: 10
                }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(masterStateUpdate, {id: 1, name:"John", age:34})
    return(
        <div>
            <h1>Reducer Hook</h1>
            <h2> NAME : {state.name}</h2>
            <button onClick={()=>dispatch({ name: "Smith", type:"CHANGE_NAME"})}>Change Name</button>
            <h2> NAME : {state.age}</h2>
        </div>
    )
}

export default ReducerHook