import React from "react";
import { useState } from "react";


function SignUp({ setUser }){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation,
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
            }
        });
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1> Sing up </h1>
                <input type= "text" value= {username} onChange={(e) => setUsername(e.target.value)} placeholder="username"/>
                <input type= "text" value= {password} onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
                <input type= "text" value= {passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="password confirmation"/>
                <button type= "submit">Sign up</button>
            </form>
        </div>
    )
}


export default SignUp