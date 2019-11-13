import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state={
      things: ['oneThing', 'twoThing', 'redThing', 'blueThing']
    }
  }

  render() {
    let mappedThing = this.state.things.map((ele, ind) => {
      return(
        <h2 key={ind}>{ele}</h2>
      )
    })
    return (
      <div className="App">
        {mappedThing}
      </div>
    );
  }
}

export default App;
