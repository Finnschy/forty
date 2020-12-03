import React, { Component } from 'react';
import DrinkCard from './DrinkCard';
import Footer from './Footer';
import Header from './Header';
import Model from './Model'

class VodkaSeite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            model: { show: false, items: null }
        }
    }
    componentDidMount() {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka")
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
    toggleModel = (items) => {

        const modal = { show: false, items: null };
        if (items) {
            modal.show = true;
            modal.items = { ...items };
        }
        this.setState({ model: modal })
    }
    render() {
        return (
            <div>
                {this.state.model.show && <Model
                    data={this.state.model.items}
                    toggle={this.toggleModel}
                />}
                <section className="VodkaSeite">
                    <Header />
                    <div className="gridContainer">
                        {this.state.isLoaded ?
                            this.state.items.drinks.map(drinks => <DrinkCard
                                key={drinks.idDrink}
                                drinksData={drinks}
                                toggleModal={() => this.toggleModel(drinks)}
                            />)
                            : <div>Loading ...</div>
                        }
                    </div>
                    <Footer />
                </section>
            </div>
        );
    }
}

export default VodkaSeite;