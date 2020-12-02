import {
    Link
} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <nav className="headerNav">
                <ul>
                    <li >
                        <Link className="forty" to="/">FORTY</Link>
                    </li>
                    <li >
                        <Link className="menu" to="/">MENU</Link>
                    </li>
                </ul>
            </nav>

            <div className="Searchdiv">
                <h1>Cocktails & Getränke!</h1>
                <p>Herzlich Willkommen in der Welt der Cocktails und Getränke!</p>
                <form action="">
                    <input type="text" id="typeSomething" placeholder="type something" />
                    <button id="search" onClick="search">Search</button>
                </form>
            </div>

            <div className="removImg"></div>
        </header>
    );
}

export default Header;