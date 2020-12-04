import React, { useState } from "react"
import * as FaIcons from "react-icons/fa"
// import * as AiIcons from "react-icons/ai"
import * as MdIcons from "react-icons/md"
import {
    Link
} from "react-router-dom";
// import {SidebarData} from "./SidebarData"
import "./Navbar.css"

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
            <div className="navbar">
                <Link className="forty" to="/">FORTY</Link>
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <MdIcons.MdClose />
                        </Link>
                    </li>

                    <li className="nav-text">
                        <Link to="/gin">Gin</Link>
                    </li>
                    <li className="nav-text">
                        <Link to="/vodka">Vodka</Link>
                    </li>
                    <li className="nav-text">
                        <Link to="/rum">Rum</Link>
                    </li>
                    <li className="nav-text">
                        <Link to="/scotch">Scotch</Link>
                    </li>
                    <li className="nav-text">
                        <Link to="/nonalcoholic">Non-Alcoholic</Link>
                    </li>
                    <li className="nav-text">
                        <Link to="/randomdrink">Random Drink</Link>
                    </li>
                    {/* {SidebarData.map((item, index) => {
                    console.log(item);
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })} */}
                </ul>
            </nav>
        </>
    );
}

export default Navbar;