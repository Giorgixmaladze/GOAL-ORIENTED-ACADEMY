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

            <button>
                <Link to="/readed">Readed Books</Link>
            </button>



        </div >)
}

export default Nav;