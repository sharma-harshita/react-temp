import React, { useEffect, useState } from "react";
import axios from "axios"

function Comp1 () {

    const [posts, setPosts] = useState(null);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res)=>{
                // console.log("response", res);
                setPosts(res.data)
            })
    }, [])


    const handlePostMethod = () => {
        const data = {
            title: 'QWERTY ASDFGH',
            body: 'bar',
            userId: 1,
          }

        // axios.post("https://jsonplaceholder.typicode.com/posts", data)
        //   .then((res)=>{
        //     console.log("RESPONSE",res);
        //   })

        // axios.delete(`https://jsonplaceholder.typicode.com/posts/${1}`)
        // .then((res)=>{
        //     console.log("RESPONSE",res);
        // })

        axios.put(`https://jsonplaceholder.typicode.com/posts/${1}`, data)
        .then((res)=>{
            console.log("RESPONSE",res);
        })
    }


    return (
        <div>
            <h1>Compoenet</h1>
            {/* {posts && posts.map((value, index)=>{
                return(
                    <div key={index}>
                        {value.title}
                    </div>
                )
            })} */}

            <button onClick={handlePostMethod}>Post data to Api</button>
        </div>
    )
}

export default Comp1