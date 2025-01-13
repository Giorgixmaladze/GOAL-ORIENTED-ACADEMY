import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
function Nav() {

    return (
        <div id="nav">

            <button>
                <Link to="/library">Library</Link>
            </button>



            <button>
                <Link to="/">Home</Link>
            </button>



        </div >)
}

export default Nav;