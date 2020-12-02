const DrinkCard = (props) => {
    console.log(props);
    return (
        <section className="DrinkCard">
                <div className="gridItem">
                    <img src={props.drinksData.strDrinkThumb} alt="alcoholic drink" />
                    <div className="outer">
                        <p className="inner">{props.drinksData.strDrink}</p>
                    </div>
                </div>
        </section>
    );
}

export default DrinkCard;