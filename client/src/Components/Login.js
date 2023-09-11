import React from "react";

import { useState } from "react";

function Login(){

    const [username, setUsername] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://127.0.0.1:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username }),
        })
        .then((r) => r.json())
        .then((user) => console.log(user));
    }

    return(
        <div>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            value={username} 
            onChange={(e)=> setUsername(e.target.value)}>
            </input>
            <button type="submit"> Login</button>
        </form>
        </div>
    );
}


export default Login



