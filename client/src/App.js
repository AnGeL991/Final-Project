import React from "react";
import MainLayout from '../src/components/layout/MainLayout/MainLayout.js'
import { Switch, Route } from "react-router-dom";
import Home from './components/pages/Home/Home';
import Brand from './components/pages/Brand/Brand';
import NotFound from './components/pages/NotFound/NotFound';


class App extends React.Component {
  
  render() {
    return (
      <MainLayout>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/producenci' component={Brand}/>
        <Route exact path='*' component={NotFound}/> 
        </Switch>
      </MainLayout>
    );
  }
}

export default App;
