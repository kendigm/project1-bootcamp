import React from "react";
import "./App.css";

import TodoList from "./components/TodoList";

class App extends React.Component {
  render() {
    return (
      <div className=" Todo App">
        <TodoList />
      </div>
    );
  }
}

export default App;
