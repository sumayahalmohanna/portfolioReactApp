import React from 'react';
import Home from './components/Layout/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import CaseStudies from './components/CaseStudies/CaseStudies';
import Contact from './components/Contact/Contact';
import FixedNav from './components/FixedNav';
import FoFPage from './components/FoFPage';

import {Route, Switch, Redirect} from 'react-router-dom';
//import {Route, Router } from 'react-router-dom';


export default function App(){
  return (
    <>
    <FixedNav />
    <Switch>
      <Redirect exact from="/"  to="/about" />
      <Route exact path="/about"  component={About} />
      <Route exact path="/skills"  component={Skills} />
      <Route exact path="/caseStudies"  component={CaseStudies} />
      <Route exact path="/contact"  component={Contact} />
      <Route component={FoFPage} />
    </Switch>
    </>
  );
}

//<Switch>
//  <Redirect exact from="/"  to="/home/about" />
//  <Route exact path="/home/:page?"  render={props => <Home {...props} />} />
//  <Route render={props => <FoFPage {...props} />} />
//</Switch>

/* <Router basename='/build'>
  <Route exact from="/"  to="/home/about" />
  <Route exact path="/home/:page?"  render={props => <Home {...props} />} />
  <Route render={props => <FoFPage {...props} />} />
</Router> */
