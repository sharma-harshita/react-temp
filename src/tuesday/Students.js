import React from "react";
import {useParams} from "react-router-dom"

function Students (){
    const params = useParams();
    console.log(params);
    return(
        <div>
            <h1>Student Component </h1>
        </div>
    )
}

export default Students