import React from 'react'


// takes user input and adds the tasks to the task-array in state

class NewTask extends React.Component{
  render() {
    return(
      <div>
        <input onChange={ e => this.props.updateInput(e.target.value) } id="inputField" />
        <button onClick={ () => this.props.handleAdd()}>push me!</button>
      </div>
    )
  }
}


export default NewTask