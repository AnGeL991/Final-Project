import React from "react";
import MainLayout from '../src/components/layout/MainLayout/MainLayout.js'
import { Switch, Route } from "react-router-dom";
import Home from './components/pages/Home/Home'
//import routes

class App extends React.Component {
  
  render() {
    return (
      <MainLayout>
        <Switch>
        <Route exact path='/' component={Home}></Route>
        </Switch>
      </MainLayout>
    );
  }
}

export default App;
