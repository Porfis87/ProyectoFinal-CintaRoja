import React from 'react';
import {useFirebaseApp, useUser} from 'reactfire';
import Auth from './Auth';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainContainer from "./containers/MainContainer"


function App() {
  const user = useUser();
  return (
    <BrowserRouter>
      <Navbar />
      { user && <p>Usuario: {user.email} </p>}
      <Auth />
      <Switch>
        <Route exact path="/" component={MainContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;