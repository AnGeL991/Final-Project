import React from "react";
import MainLayout from '../src/components/layout/MainLayout/MainLayout.js'
import { Switch, Route } from "react-router-dom";
import Home from './components/pages/Home/Home';
import Brand from './components/pages/Brand/Brand';
import Coffee from './components/pages/Coffee/Coffee';
import Tea from './components/pages/Tea/tea';
import Yerba from './components/pages/Yerba/yerba';
import CoffeeMachin from './components/pages/CoffeeMachin/coffeeMachin';
import NotFound from './components/pages/NotFound/NotFound';
import Sale from './components/pages/Sale/sale';
import Order from "./components/pages/Order/order.js";

class App extends React.Component {

  
  render() {
    return (
      <MainLayout>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/producenci' component={Brand}/>
        <Route exact path='/kawa' component={Coffee}/>
        <Route exact path='/herbata' component={Tea}/>
        <Route exact path='/yerba' component={Yerba}/>
        <Route exact path='/Expresy$młynki' component={CoffeeMachin}/>
        <Route exact path='/promocje' component={Sale}/>
        <Route exact path='/order' component={Order}/>
        <Route exact path='*' component={NotFound}/> 

        </Switch>
      </MainLayout>
    );
  }
}


export default App;
