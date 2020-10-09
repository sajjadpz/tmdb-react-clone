import React from "react";
import Home from "./components/Home";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { MovieDetail } from "./components/MovieDetail";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/movies/:movieId" component={ MovieDetail } />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}
