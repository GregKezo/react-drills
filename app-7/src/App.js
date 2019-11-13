import React, { Component } from "react";
import "./App.css";
import NewTask from "./Components/NewTask";
import List from './Components/List';

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      list: [],
      userInput: ''
    }

    this.updateInput = this.updateInput.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }

updateInput(val) {
  this.setState({
    userInput: val
  })
}

handleAdd() {
  this.setState({
    list: [...this.state.list, this.state.userInput],
    userInput: ''
  })
  document.getElementById('inputField').value = ''
}



  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <h6>(it's very nice)</h6>
        <NewTask updateInput={this.updateInput} handleAdd={this.handleAdd}/>
        <List list={this.state.list}/>
      </div>
    );
  }
}

export default App;
