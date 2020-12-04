import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import GinSeite from "./components/GinSeite";
import VodkaSeite from "./components/VodkaSeite";
import RumSeite from "./components/RumSeite";
import ScotchSeite from "./components/ScotchSeite";
import NoAlkoholSeite from "./components/NoAlkoholSeite";
import RandomDrink from "./components/RandomDrinkSeite"
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/gin" component={GinSeite} />
        <Route path="/vodka" component={VodkaSeite} />
        <Route path="/rum" component={RumSeite} />
        <Route path="/scotch" component={ScotchSeite} />
        <Route path="/nonalcoholic" component={NoAlkoholSeite} />
        <Route path="/randomdrink" component={RandomDrink} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
