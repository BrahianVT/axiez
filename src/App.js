import React from "react";
import {BrowserRouter as Routing, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import pj from '../package.json';

function App() {
  return (
      <Routing >
        <Switch>
          <Route exact path={"/" }  component={Main}/>
        </Switch>
      </Routing>
  );
}

export default App;
