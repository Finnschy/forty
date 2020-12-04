import React from 'react'
class Model extends React.Component {
    state = {
        isLoaded: false,
        data: null,
        error: null
    }
    componentDidMount() {
        /* console.log(this.props)  */ 
        fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + this.props.data.idDrink)
            .then(res => res.json())
            .then(
                (result) => {
                    let Frinalresult = null
                    if (result.drinks && result.drinks.length > 0) {
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
                /* console.log(error) */
            })
    }
    render() {
        /* console.log(this.state) */
        return (
            <div className="box">
                {/* <div className=“closebox” onClick={() => this.props.toggle()}>X</div> */}
                {this.state.data && this.state.isLoaded &&
                    <div className="boxFlex">
                        <div className="zutatenImg">
                            <img src={this.state.data.strDrinkThumb} alt="" />
                        </div>
                        <div className="zutaten">
                            <h2>{this.state.data.strDrink}</h2>
                            <ul>
                                <li>{this.state.data.strIngredient1}</li>
                                <li>{this.state.data.strIngredient2}</li>
                                <li>{this.state.data.strIngredient3}</li>
                                <li>{this.state.data.strIngredient4}</li>
                                <li>{this.state.data.strIngredient5}</li>
                                <li>{this.state.data.strIngredient6}</li>
                                <li>{this.state.data.strIngredient7}</li>
                                <li>{this.state.data.strIngredient8}</li>
                                <li>{this.state.data.strIngredient9}</li>
                            </ul>
                            <p>{this.state.data.strInstructions}</p>
                        </div>
                    </div>
                }
                {this.state.error && this.state.isLoaded &&
                    <div>
                        {this.state.error.message}
                    </div>
                }
                <div className="closebox" onClick={() => this.props.toggle()}>&#10005;</div>
            </div>
        )
    }
}
export default Model;

