import React, { Component } from 'react';
import DrinkCard from './DrinkCard';
import Footer from './Footer';
import Header from './Header';
class GinSeite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }
    componentDidMount() {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
        return (
            <section className="GinSeite">
                <Header />
                <div className="gridContainer">
                {this.state.isLoaded ?
                    this.state.items.drinks.map(drinks => <DrinkCard
                        key={drinks.idDrink}
                        drinksData={drinks}
                        
                    />)
                    : <div>Loading ...</div>}
                </div>
                <Footer />
            </section>
        );
    }
}

export default GinSeite;


/*
Tipps falls mit React und API gearbeitet wird:
Styles für die boxen können mit Modulus gemacht werden.
            {data.map((e, i) => <div className={`style${Math.floor((i % 6) + 1)} ${i % 2 == 0 ? 'left' : 'right'}`} 
                    key={e.id}>
			        {e.first_name}
			        </div>)}
So bekommt jedes Element 2 Klassen. style1 bis style6 und left oder right. 
So kann man mit CSS style1 bis 6 die Hintergrundfarben geben und mit left oder right die flex-direction ändern.




onlick modal id abrufen
mit dieser id dann einen erneuten api aufruf starten 

*/