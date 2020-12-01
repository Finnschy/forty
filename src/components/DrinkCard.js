const DrinkCard = (props) => {
    console.log(props);
    return (  
        <section className="DrinkCard">
                <div className="GinDrink">
                <img src={props.drinksData.strDrinkThumb} />
                <p>{props.drinksData.strDrink}</p>
               
                </div>
        </section>
    );
}
 
export default DrinkCard;