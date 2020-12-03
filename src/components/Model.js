
import React from 'react'

class Model extends React.Component {

        state={
            isLoaded: false,
            data: null,
            error: null
        }
    componentDidMount(){
        /* console.log(this.props)  */
        fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + this.props.data.idDrink)
        .then(res => res.json())
        .then(
            (result) => {
                let Frinalresult = null
                if(result.drinks && result.drinks.length > 0 ){
                    Frinalresult = result.drinks[0]
                }
                this.setState({
                    isLoaded: true,
                    data: Frinalresult
                });
            }
            
        )
        .catch((error) => {
            this.setState({
                isLoaded: true,
                error
            });
        })
        

    }
    
    render(){
         console.log(this.state) 
    return(

        
        <div className="box">
            <div className="closebox"  onClick={() =>this.props.toggle()}>X</div>
            {this.state.data &&  this.state.isLoaded &&
           <div> 
                <h1>{this.state.data.strInstructions}</h1>
            <img src={this.state.data.strDrinkThumb} alt=""/>
            </div> 
            
            } 
            {this.state.error && this.state.isLoaded && 
            <div>
                {this.state.error.message}
            </div>
            }

           
        </div>
    )
}
}
export default Model;

