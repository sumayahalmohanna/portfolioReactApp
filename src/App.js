import React from 'react';
import Home from './components/Layout/Home';
import FoFPage from './components/FoFPage';
import {Route, Switch, Redirect} from 'react-router-dom';
//import {Route, Router } from 'react-router-dom';


export default function App(){
  return (

      <Switch>
        <Redirect exact from="/portfolioReactApp"  to="/home/about" />
        <Route exact path="/home/:page?"  render={props => <Home {...props} />} />
        <Route render={props => <FoFPage {...props} />} />
      </Switch>
  );
}

//<Switch>
//  <Redirect exact from="/"  to="/home/about" />
//  <Route exact path="/home/:page?"  render={props => <Home {...props} />} />
//  <Route render={props => <FoFPage {...props} />} />
//</Switch>

{/* <Router basename='/build'>
  <Route exact from="/"  to="/home/about" />
  <Route exact path="/home/:page?"  render={props => <Home {...props} />} />
  <Route render={props => <FoFPage {...props} />} />
</Router> */}
