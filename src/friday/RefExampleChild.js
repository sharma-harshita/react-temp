import React, { forwardRef } from "react";

function RefExampleChild (props, ref) {
    console.log(props, ref);
    return(
        <div>
            <h1> RefExampleChild Component {ref.nameRef.current.value}</h1>
        </div>
    )
}

export default forwardRef(RefExampleChild)

