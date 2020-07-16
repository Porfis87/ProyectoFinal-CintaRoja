import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainContainer from "./containers/MainContainer"
import Contacto from './containers/Contacto';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route exact path="/contacto" component={Contacto} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
