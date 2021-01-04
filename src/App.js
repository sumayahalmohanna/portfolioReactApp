import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import FoFPage from './components/FoFPage';
import CssBaseline from '@material-ui/core/CssBaseline';

import {Route, Switch, Redirect, withRouter} from 'react-router-dom';


function App(){
  return (
    <>
    <CssBaseline />
    <Header />
    <Switch>
      <Redirect exact from="/"  to="/home/about" />
      <Route exact path="/home/about"  render={props => <About {...props} />} /> 
      <Route exact path="/home/caseStudies"  render={props => <CaseStudies {...props} />} /> 
      <Route exact path="/home/contact"  render={props => <Contact {...props} />} />      
      <Route render={props => <FoFPage {...props} />} />
    </Switch>
    <Footer />
    </>
  );
};

export default withRouter(App);