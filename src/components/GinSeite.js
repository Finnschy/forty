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
                {this.state.isLoaded ?
                    this.state.items.drinks.map(drinks => <DrinkCard
                        key={drinks.idDrink}
                        drinksData={drinks}
                    />)
                    : <div>Loading ...</div>}
                <Footer />
            </section>
        );
    }
}

export default GinSeite;