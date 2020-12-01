import React, { Component } from 'react';
import DrinkCard from './DrinkCard';
import Footer from './Footer';
import Header from './Header';
class ZufaelligerDrinkSeite extends Component {
    state = {  }
    render() { 
        return (  
            <section className="ZufaelligerDrinkSeite">
                <Header />
                <h1>Random Drik</h1>
                <DrinkCard />
                <Footer />
            </section>
        );
    }
}
 
export default ZufaelligerDrinkSeite;