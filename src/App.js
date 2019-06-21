import 'babel-polyfill';
import React, { Component } from "react";
import ReactGA from 'react-ga';

import "./App.css"
import BottomNavigation from './components/BottomNavigation';
import Container from '@material-ui/core/Container';
import Home from './onepirate/Home';
// import LambdaDemo from './util/LambdaDemo';
import NavBar from './components/NavBar';
import Tennis from './components/Tennis';


class App extends Component {
  constructor(props) {
    super(props)
    if (process.env.NODE_ENV === 'production') {
      console.log('production')
      ReactGA.initialize('UA-73381859-5');
      ReactGA.pageview(window.location.pathname + window.location.hash);
    }
  }

  render() {

    return (
      <Home />
    )

    return (
      <div className="App">
        <NavBar />
        {/* <LambdaDemo /> */}
        <Container
          maxWidth='xs'
        >
          <Tennis />
        </Container>
        <BottomNavigation />
      </div>
    )
  }
}

export default App
