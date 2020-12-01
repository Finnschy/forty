import {
    Link
  } from "react-router-dom";

const MainSection = () => {
    return (  
        <section className="MainSection">
            <Link to="/gin">Gin</Link>
            <Link to="/vodka">Vodka</Link>
            <Link to="/rum">Rum</Link>
            <Link to="/scotch">Scotch</Link>
            <Link to="/nonalcoholic">Non-Alcoholic</Link>
            <Link to="/randomdrink">Random Drink</Link>
        </section>
    );
}
 
export default MainSection;