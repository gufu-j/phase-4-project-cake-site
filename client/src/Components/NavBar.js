import React from "react";
import { Link } from "react-router-dom"

function NavBar({ user, setUser }){


    function handleLogout(){
        fetch("/logout", {
            method: "DELETE",
        }).then((r)=> {
            if(r.ok){
                setUser(null);
            }
        });
    }


    return(
        <header>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                {user ? (
                    <button onClick={handleLogout}> Logout </button>
                 ) : (
                    <>
                        <Link to= "/signup"> SignUp </Link>
                        <Link to= "/login"></Link>
                    </>
                )}
            </div>
        </header>
    );
}

export default NavBar