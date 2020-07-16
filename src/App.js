import React from 'react';


import './App.css';
import MainContainer from './containers/MainContainer';

import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainContainer from "./containers/MainContainer"


function App() {
  return (
    <div className="App">


      <MainContainer />

    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={MainContainer} />
      </Switch>
    </BrowserRouter>

    </div>
  );
}

export default App;
