import React from 'react'
import Todo from './Todo'

//displays <Todo /> elements in a list
class List extends React.Component {

  render(){
    let todos = this.props.list.map((ele, index) => {
      return(
        <div>
          <Todo key={index} todo={ele} />
        </div>
      )
    })
  

    return(
      <div>
        {todos}
      </div>
    )
  }
}

export default List