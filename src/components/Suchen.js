// import { render } from '@testing-library/react'
// import React from 'react'
// import DrinkCard from './DrinkCard';
// import Footer from './Footer';
// import Header from './Header';
// //import Model from './Model'



// class Suchen extends React.Component {
//     state = {
//         isLoaded: false,
//         data: null,
//         error: null,
//         items: [],
//         text: "",
//         model: { show: false, items: null }
//     }

//     componentDidMount() {
//     fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + this.props.data.idDrink)
//     .then(res => res.json())
//     .then(
//         (result) => {
//             let Frinalresult2 = typeSomething
//             if (result.drinks && result.drinks.length > 0) {
//                 Frinalresult2 = result.drinks[0]
//             }
//             this.setState({
//                 isLoaded: true,
//                 data: Frinalresult2
//             });
//         }
//     )
//     .catch((error) => {
//         this.setState({
//             isLoaded: true,
//             error
//         });
        
//     })
// }
//     toggleModel2 = (items) => {
//        /*  console.log(items) */
//         const modal1 = {show:false , items:null};
//        /*  console.log(modal) */
//         if (items){
//             modal.show = true ;
//             modal.items = {...items};
//         }
//              this.setState({text: modal1})
//      }
    

//     render() {
//         /* console.log(this.state.items) */
//         return (
//             <div>
//                 {this.state.text.value && <Header
//                     data={this.state.text.value}
//                     toggle={this.toggleModel}
//                 />}
//                 <section className="GinSeite">
//                     <Header />
//                     <div className="gridContainer">
//                         {this.state.isLoaded ?
//                             this.state.items.drinks.map(drinks => <DrinkCard
//                                 key={drinks.idDrink}
//                                 drinksData={drinks}
//                                 toggleModal={() => this.toggleModel(drinks)}
//                             />)
//                             : <div>Loading ...</div>
//                         }
//                     </div>
//                     <Footer />
//                 </section>
//             </div>);
//     }
// }
        
                
        
        
    
// export default Suchen; 