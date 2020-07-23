import React, { Component } from "react";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

class App extends Component {
  render() {
    return (
      <div>
        <div className="text-centre">
          <AddTodo />

          <TodoList />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
