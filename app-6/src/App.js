import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from './Todo'

class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
      userInput: '',
      todos: []
    }

  }

  updateUserInput(val) {
    this.setState({userInput: val})
  }

  addClick() {
    this.setState({
      todos: [...this.state.todos, this.state.userInput], 
      userInput: ''
    })
    document.getElementById('inputField').value = '';

  }

  render() {
    let todos = this.state.todos.map((ele, ind) => {
      return <Todo key={ind} todo={ele} />
    })

    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input onChange={ e => this.updateUserInput(e.target.value)} id="inputField"/>
        <button onClick={ () => this.addClick()}>Add</button>
        <ul>
          {todos}
        </ul>
      </div>
    );
  }
}

export default App;
