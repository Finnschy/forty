import {
    Link
  } from "react-router-dom";

const Header = () => {
    return (  
        <header>
            <h1>Header</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Forty</Link>
                    </li>
                    <li>
                        <Link to="/">MENU</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
 
export default Header;