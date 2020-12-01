import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
class GinSeite extends Component {
    state = {  }
    render() { 
        return (  
            <section className="GinSeite">
                <Header />
                <h1>Gin</h1>
                
                <Footer/>
            </section>
        );
    }
}
 
export default GinSeite;