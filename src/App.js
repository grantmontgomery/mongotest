import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Post, Layout, Get } from "./components";

import { Nav } from "./components";
import "App.css";
export const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Post}></Route>
          <Route path="/get" component={Get}></Route>
        </Switch>
      </Layout>
    </Router>
  );
};
