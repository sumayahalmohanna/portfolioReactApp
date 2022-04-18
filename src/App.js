import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import FoFPage from './components/FoFPage';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Route, Switch, Redirect, withRouter, useLocation} from 'react-router-dom';
import ReactGA from 'react-ga';


function usePageViews() {
  let location = useLocation();
  useEffect(() => {
    ReactGA.initialize('UA-199288730-1');
    ReactGA.set({page: location.pathname});
    ReactGA.pageview(location.pathname);
  }, [location]);
}

function App(){
  usePageViews();
  return (
    <>
    <CssBaseline />
    <Header />
    <Switch>
      <Redirect exact from="/portfolioReactApp/"  to="/portfolioReactApp/home/about" />
      <Route exact path="/portfolioReactApp/home/about"  render={props => <About {...props} />} /> 
      <Route exact path="/portfolioReactApp/home/caseStudies"  render={props => <CaseStudies {...props} />} /> 
      <Route exact path="/portfolioReactApp/home/contact"  render={props => <Contact {...props} />} />     
      <Route render={props => <FoFPage {...props} />} />
      {window.scrollTo(0, 0)}
    </Switch>
    <Footer />
    </>
  );
};

export default withRouter(App);