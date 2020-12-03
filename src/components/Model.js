
import React from 'react'
const Model = (props) => {
    console.log(props)
    return (

        <div className="box">
            <div className="zutatenImg">
                <img src="https://picsum.photos/900" alt="" />
            </div>

            <div className="zutaten">
                <h2>3-Mile Long Island Iced Tea</h2>
                <ul>
                    <li>DrinksID: {props.data.idDrink}</li>
                    <li>1/2 oz Gin</li>
                    <li>1/2 oz Light rum</li>
                    <li>1/2 oz Tequila</li>
                    <li>1/2 oz Triple sec</li>
                    <li>1/2 oz Vodka</li>
                    <li>Coca-Cola</li>
                    <li>1 – 2 dash Sweet and sour</li>
                    <li>1 wedge  Bitters</li>
                    <li>Lemon</li>
                </ul>
                <p>Fill 14oz glass with ice and alcohol. Fill 2/3 glass with cola and remainder with sweet & sour. Top with dash of bitters and lemon wedge.</p>
            </div>
            <div className="closebox" onClick={() => props.toggle()}>&#10005;</div>
        </div>
    )
}
export default Model;

