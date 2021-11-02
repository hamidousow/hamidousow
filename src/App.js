import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from './pages/NotFound';
import Home from "./pages/Home";
import Nisaa from "./pages/Nisaa";

const App = () => {
  return (    
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>      
        <Route path="/nisaa" exact component={Nisaa}/>      
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>    
  );
};

export default App;
