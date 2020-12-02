import {
    Link
  } from "react-router-dom";

const Header = () => {
    return (  
        <header className="header">
            {/* <h1>Header</h1> */}
            <nav className="headerNav">
                <ul>
                    <li >
                        <Link className="forty" to="/">Forty</Link>
                    </li>
                    <li >
                        <Link className="menu" to="/">MENU</Link>
                    </li>
                </ul>
            </nav>

            <div className="Searchdiv">
                <ul>
                    <li className="cocktil"> Cocktails & Getränke!</li>
                    <li className="welcome">Herzlich Willkommen in der Welt der Cocktails und Getränke!</li>
                </ul>
            </div>

            <div className="searchtype">
            <ul >
                <li>
                    <input type="text" id="typeSomething" placeholder="type something"/>
                </li>
                 <li >
                    <button id="search" onClick="search">Search</button>
                    </li>
                </ul>
                </div>
                <div className="removImg"></div>
        </header>
    );
}
 
export default Header;