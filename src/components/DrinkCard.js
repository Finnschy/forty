import React from 'react'

const DrinkCard = ({drinksData, toggleModal}) => {
    return (
        <section className="DrinkCard">
            <div className="DrinkCardDiv" onClick={() =>{toggleModal && toggleModal(drinksData)}}>
                <img src={drinksData.strDrinkThumb} alt="alcoholic drink"/>
                <p>{drinksData.strDrink}</p>
                </div>
        </section>
    );
};

export default DrinkCard;