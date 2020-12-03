import React from 'react'


const DrinkCard = ({drinksData, toggleModal}) => {


    
        
            /* fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15300")
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
                render() {
                    console.log(drinks.idDrink)
                }
                     */

    return (
        <section className="DrinkCard">
            <div className="DrinkCardDiv" onClick={() =>{toggleModal && toggleModal(drinksData)}}>
                <img src={drinksData.strDrinkThumb} alt="alcoholic drink"/>
                <p>{drinksData.strDrink}</p>
                </div>
        </section>
        
    )
};


export default DrinkCard;