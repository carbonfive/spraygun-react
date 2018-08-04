import React, { Component } from "react";
import "./App.scss";
import ToggleSwitch from "./components/ToggleSwitch";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
  }

  handleToggle = () => {
    this.setState(state => ({ ...state, isOn: !state.isOn }));
  };

  render() {
    const { isOn } = this.state;

    return (
      <div className="App">
        <header className="App__header">
          <p className="App__intro">Give it a spin!</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ToggleSwitch isOn={isOn} onClick={this.handleToggle} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
