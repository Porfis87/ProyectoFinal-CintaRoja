import React from 'react';
import './App.css';
import CreateContainer from './containers/CreateContainer'
import { useFirebaseApp, useUser } from 'reactfire';
import Auth from './Auth';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainContainer from "./containers/MainContainer"
import Contacto from './containers/Contacto';
import CreateContainer from "./containers/"


function App() {
  const user = useUser();
  return (
    <BrowserRouter>
      <Navbar />
      {user && <p>Usuario: {user.email} </p>}
      <Auth />
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route exact path="/contacto" component={Contacto} />
        <Route exact path="/create" component={CreateContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;