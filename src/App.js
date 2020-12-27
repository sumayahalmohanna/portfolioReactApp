import React from 'react';
import Home from './components/Home';
import FoFPage from './components/FoFPage';

import {Route, Switch, Redirect, withRouter} from 'react-router-dom';


function App(){
  return (
    <>
    <Switch>
      <Redirect exact from="/"  to="/home/about" />
      <Route exact path="/home/:page?"  render={props => <Home {...props} />} />
      <Route render={props => <FoFPage {...props} />} />
    </Switch>
    </>
  );
};

export default withRouter(App);


/* 
<Switch>
      <Redirect exact from="/"  to="/home/about" />
      <Route exact path="/home/:page?"  render={props => <Home {...props} />} />
      <Route render={props => <FoFPage {...props} />} />
    </Switch>

<Router basename='/build'>
  <Route exact from="/"  to="/home/about" />
  <Route exact path="/home/:page?"  render={props => <Home {...props} />} />
  <Route render={props => <FoFPage {...props} />} />
</Router> 

<Switch>
      <Route exact path="/"  component={About} />
      <Route exact path="/Skills"  component={Skills} />
      <Route exact path="/CaseStudies"  component={CaseStudies} />
      <Route exact path="/Contact"  component={Contact} />
      <Route component={FoFPage} />
    </Switch>
    <FixedNav />

*/
