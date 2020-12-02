import React, { Component } from 'react';
import DrinkCard from './DrinkCard';
import Footer from './Footer';
import Header from './Header';
class ScotchSeite extends Component {
    state = {  }
    render() { 
        return (  
            <section className="ScotchSeite">
                <Header />
                <h1>Scotch</h1>
                <DrinkCard />
                <Footer />
            </section>
        );
    }
}
 
export default ScotchSeite;
