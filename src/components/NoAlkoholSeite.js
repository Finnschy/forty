import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
class NoAlkoholSeite extends Component {
    state = {  }
    render() { 
        return (  
            <section className="NoAlkoholSeite">
                <Header />
                <h1>NonAlcoholic</h1>
                <Footer />
            </section>
        );
    }
}
 
export default NoAlkoholSeite;