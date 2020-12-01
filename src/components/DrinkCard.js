const DrinkCard = (props) => {
    console.log(props);
    return (  
        <section className="DrinkCard">
                <p>{props.drinksData.strDrink}</p>
        </section>
    );
}
 
export default DrinkCard;