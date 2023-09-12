import React from "react";
import { Link } from "react-router-dom"

function NavBar(){


    return(
        <header>
            <div>
                <Link to="/">Home</Link>
            </div>
        </header>
    )
}

export default NavBar