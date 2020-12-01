import React, { Component } from 'react';
import DrinkCard from './DrinkCard';
import Footer from './Footer';
import Header from './Header';
class NoAlkoholSeite extends Component {
    state = {  }
    render() { 
        return (  
            <section className="NoAlkoholSeite">
                <Header />
                <h1>NonAlcoholic</h1>
                <DrinkCard />
                <Footer />
            </section>
        );
    }
}
 
export default NoAlkoholSeite;