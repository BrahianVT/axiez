import React from "react";
import {HashRouter, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import pj from '../package.json';

function App() {
  return (
      <HashRouter>
        <Switch>
          <Route path={"/" + pj.name}  component={Main}/>
        </Switch>
      </HashRouter>
  );
}

export default App;
