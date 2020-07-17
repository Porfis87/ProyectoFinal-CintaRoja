import React from 'react';
import CreateContainer from './containers/CreateContainer'
import { useFirebaseApp, useUser } from 'reactfire';
import Auth from './Auth';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainContainer from "./containers/MainContainer"
import Contacto from './containers/Contacto';

function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route exact path="/contacto" component={Contacto} />
        <Route exact path="/create" component={CreateContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;