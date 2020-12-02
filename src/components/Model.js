
import React from 'react'
const Model = (props) =>  {
   /* console.log(props) */
    return(

        <div className="box">
            <div className="zutatenImg">
          {/*  <img src="https://images.unsplash.com/photo-1560508179-b2c9a3f8e92b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>  */}
            </div>

            <div className="zutaten"> 
                <ul>
                    <li>3-Mile Long Island Iced Tea</li>
                    <li>Zutaten</li>
                    <li> 1/2 oz Gin 1/2 oz Light rum 1/2 oz Tequila 1/2 oz Triple sec 1/2 oz Vodka Coca-Cola 1 – 2 dash Sweet and sour 1 wedge Bitters Lemon </li>
                  
                    <li>Fill 14oz glass with ice and alcohol. Fill 2/3 glass with cola and remainder with sweet & sour. Top with dash of bitters and lemon wedge.</li>
                </ul>
            </div>
            <div className="closebox"  onClick={() =>props.toggle()}>X</div>
        </div>
    )
}
export default Model;

