import { Link } from "react-router-dom"


const Navigation = () => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )

}

export default Navigation