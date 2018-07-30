import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import logo from "./logo.svg";
import "./App.css";
import AuthStatus from "./AuthStatus";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AuthStatus />
          <header className="App__header">
            <img src={logo} className="App__logo" alt="logo" />
            <h1 className="App__title">Welcome to React</h1>
          </header>
          <p className="App__intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Provider>
    );
  }
}

export default App;
