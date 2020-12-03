import React, { Component } from 'react';
import DrinkCard from './DrinkCard';
import Footer from './Footer';
import Header from './Header';
class ScotchSeite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }
    componentDidMount() {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Scotch")
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
            <section className="ScotchSeite">
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

export default ScotchSeite;
