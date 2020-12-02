import {
    Link
  } from "react-router-dom";

const MainSection = () => {
    return (  
        <section className="MainSection">

            <Link to="/gin" className="Ginlink">Gin</Link>
            
            <Link to="/vodka" className="Vodkalink">Vodka</Link>
         
            <Link to="/rum" className="Rumlink">Rum</Link>
          
            <Link to="/scotch" className="Scotchlink">Scotch</Link>
           
            <Link to="/nonalcoholic"  className="Nonlink">Non-Alcoholic</Link>
            
            <Link to="/randomdrink" className="Randomlink">Random Drink</Link>
            
        </section>
    );
}
 
export default MainSection;