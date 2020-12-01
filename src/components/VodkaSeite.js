import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
class VodkaSeite extends Component {
    state = {  }
    render() { 
        return (  
            <section className="VodkaSeite">
                <Header />
                <h1>Vodka</h1>
                <Footer />
            </section>
        );
    }
}
 
export default VodkaSeite;