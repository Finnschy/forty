// import {
//     Link
// } from "react-router-dom";

import * as FaIcons from "react-icons/fa"

const Header = () => {
    return (
        <header className="header">
            <div className="Searchdiv fadeIn">
                <h1>Cocktails & Drinks!</h1>
                <p>Welcome to the world of Cocktails and Drinks!</p>
                <form action="">
                    <input type="text" id="typeSomething" placeholder="type something" />
                    <button id="search" onClick="search">Search</button>
                </form>
            </div>
            <div className="iconBox">
                <FaIcons.FaAngleDoubleDown />
            </div>
        </header>
    );
}

export default Header;