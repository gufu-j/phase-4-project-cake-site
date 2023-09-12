import React from "react";
import { useState } from "react";


function Login({setUser}){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            if(r.ok){
                r.json().then((user) => setUser(user))
            }
        })
    }

    return(
        <div>
        <form onSubmit={handleSubmit}>
            <h1> Login </h1>
            <input type= "text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type= "password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit"> Login </button>
        </form>
        </div>
    );
}


export default Login



