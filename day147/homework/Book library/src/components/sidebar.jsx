import Nav from "./nav";


function Sidebar(){
    return(
        <div id="sidebar">
            <div id="sidebar-header">
                <h3>MyBooks.com</h3>
            </div>

            <Nav />
        </div>
    )
}

export default Sidebar;