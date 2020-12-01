import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
class ZufaelligerDrinkSeite extends Component {
    state = {  }
    render() { 
        return (  
            <section className="ZufaelligerDrinkSeite">
                <Header />
                <h1>Random Drik</h1>
                <Footer />
            </section>
        );
    }
}
 
export default ZufaelligerDrinkSeite;