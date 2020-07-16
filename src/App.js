import React from 'react';
import './App.css';
import CreateContainer from './containers/CreateContainer'
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainContainer from "./containers/MainContainer"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainContainer} />
          <Route exact path="/create" component={CreateContainer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
