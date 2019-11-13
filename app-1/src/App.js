import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state={
      words: ''
    }
  }

  handleChanges = (val) => {
    this.setState({ words: val })
  }

  render() {
    return (
      <div className="App">
        <input onChange={ e => {this.handleChanges(e.target.value)}} />
        <p>{this.state.words}</p>
      </div>
    );
  }
}

export default App;
