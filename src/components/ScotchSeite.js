import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
class ScotchSeite extends Component {
    state = {  }
    render() { 
        return (  
            <section className="ScotchSeite">
                <Header />
                <h1>Scotch</h1>
                <Footer />
            </section>
        );
    }
}
 
export default ScotchSeite;