import React, { Component } from "react";
import { render } from "react-dom";
import { hot } from "react-hot-loader";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    );
  }
}

export default hot(module)(App);
