import { useState,useEffect } from "react";
import {Link, useNavigate} from "react-router-dom"
function Nav() {
    const navigate = useNavigate()

    return(
    <div id="nav">
        <Link to="./library">
           <button>Library</button> 
        </Link>
       
       <Link to="/"><button>Home</button></Link>
        
        
    </div>)
}

export default Nav;