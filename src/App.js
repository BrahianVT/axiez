import React from "react";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import pj from '../package.json';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path={"/" + pj.name}  component={Main}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
