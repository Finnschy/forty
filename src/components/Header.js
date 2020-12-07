import React, { Component } from 'react';
import * as FaIcons from "react-icons/fa"

class Header extends Component{   
    constructor(props) {
        super(props);
        this.state = {
            search:""
        };
        this.onInputchange = this.onInputchange.bind(this);
        };

    onInputchange(event) {
        this.setState({
          search: event.target.value
        });
      }
    render() { 
        return (
            <header className="header">
                <div className="Searchdiv fadeIn">
                    <h1>Cocktails & Drinks!</h1>
                    <p>Welcome to the world of Cocktails and Drinks!</p>
                    <form action="">
                        <input type="text" id="typeSomething" onChange={this.onInputchange}
                        value={this.state.search}
                        placeholder="search for ingredients" />

                        <button id="search" onClick= {(e)=> {
                            e.preventDefault();
                            this.props.onSubmitForm && this.props.onSubmitForm(this.state.search)
                        } }>Search</button>
                        
                    </form>
                </div>
                <div className="iconBox">
                    <FaIcons.FaAngleDoubleDown />
                </div>
            </header>
            
        );
}
}

export default Header;


  

