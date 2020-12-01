import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
class RumSeite extends Component {
    state = {  }
    render() { 
        return (  
            <section className="RumSeite">
                <Header />
                <h1>Rum</h1>
                <Footer />
            </section>
        );
    }
}
 
export default RumSeite;