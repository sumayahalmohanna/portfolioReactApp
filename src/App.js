import React from 'react';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import CaseStudies from './components/CaseStudies/CaseStudies';
import Contact from './components/Contact/Contact';
import FixedNav from './components/FixedNav';
import FoFPage from './components/FoFPage';

import {Route, Switch} from 'react-router-dom';


export default function App(){
  return (
    <>
    <Switch>
      <Route exact path="/"  component={About} />
      <Route exact path="/Skills"  component={Skills} />
      <Route exact path="/CaseStudies"  component={CaseStudies} />
      <Route exact path="/Contact"  component={Contact} />
      <Route component={FoFPage} />
    </Switch>
    <FixedNav />
    </>
  );
}


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
