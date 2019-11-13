import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state={
      food: ['spaghetti', 'ice cream', 'bologna', 'sushi', 'cheese'],
      userInput: ''
    }
  }

handleChange(val) {
  this.setState({userInput: val})
}

  render() {
    let filteredFoods = this.state.food
      .filter( ele => {
        return ele.includes(this.state.userInput)
      })
      .map((elem, ind) => {
        return <h2 key={ind}>{elem}</h2>
        
      })
    return (
      <div className="App">
        <input onChange={ e => this.handleChange(e.target.value) } type="text" />
        {filteredFoods}
      </div>
    );
  }
}

export default App;
