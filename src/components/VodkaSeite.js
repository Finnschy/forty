import React, { Component } from 'react';
import DrinkCard from './DrinkCard';
import Footer from './Footer';
import Header from './Header';
class VodkaSeite extends Component {
    state = {  }
    render() { 
        return (  
            <section className="VodkaSeite">
                <Header />
                <h1>Vodka</h1>
                <DrinkCard />
                <Footer />
            </section>
        );
    }
}
 
export default VodkaSeite;