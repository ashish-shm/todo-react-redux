import React, { Component } from "react";
import {
  ALL_TODO,
  ACTIVE_TODO,
  COMPLETED_TODO,
  CLEAR_COMPLETED,
} from "../store/types";
import { connect } from "react-redux";

class Footer extends Component {
  handleClear = () => {
    this.props.dispatch({ type: CLEAR_COMPLETED });
  };

  handleChange = (newTab) => {
    this.props.dispatch({ type: "change", payload: newTab });
  };


  render() {

    let itemsLeft = this.props.todo.filter((todo) => !todo.completed).length;
    return (
      <>
        <footer className="footer">
          <div className="flex">
            <p className="itemsLeft">{`${itemsLeft} items left`}</p>
            <div className="button_flex">

              <button onClick={() => this.handleChange(ALL_TODO)}>All</button>


              <button onClick={() => this.handleChange(ACTIVE_TODO)}>
                Active
                </button>


              <button onClick={() => this.handleChange(COMPLETED_TODO)}>
                Completed
                </button>


              <button onClick={() => this.handleClear()}>
                Clear Completed
            </button>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

function mapState(state) {
  return state;
}

export default connect(mapState)(Footer);
