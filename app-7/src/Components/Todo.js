import React from 'react'

// list of individual todos in List
class Todo extends React.Component {
  render(){
    return(
      <p>
        {this.props.todo}
      </p>
    )
  }
}

export default Todo