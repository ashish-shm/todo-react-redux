import React from "react";
import { connect } from "react-redux";
import { ADD_TODO } from "../store/types";

class AddTodo extends React.Component{
  handleAddTodo = ({ target, keyCode }) => {
    if (keyCode === 13) {
      this.props.dispatch({
        type: ADD_TODO,
        payload: target.value,
      });
      target.value = "";
    }
  };

 

  render() {
    return (
      <>
        <h1>To-Do Manager</h1>
        
        <input
          type="text"
          placeholder="What needs to be done?"
          className="input"
          onKeyDown={this.handleAddTodo}
        />
      </>
    );
  }
}

function mapState(state) {
  return state;
}

export default connect(mapState)(AddTodo);
