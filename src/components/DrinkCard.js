import React from 'react'


const DrinkCard = ({drinksData, toggleModal}) => {

    return (
        <section className="DrinkCard">
            <div className="DrinkCardDiv" onClick={() => { toggleModal && toggleModal(drinksData) }}>
                <img src={drinksData.strDrinkThumb} alt="alcoholic drink" />
                <div className="outer">
                    <p className="inner">{drinksData.strDrink}</p>
                </div>
            </div>
        </section>
        
    )
};


export default DrinkCard;