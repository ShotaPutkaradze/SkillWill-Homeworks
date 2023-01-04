import React, { Component } from "react";
import AddItemForm from "./components/AddItemForm";
import "./App.css";
import ToDoList from "./components/ToDoList";

class App extends Component {
  // state = {
  //   subject: "1",
  //   task: "2",
  // };

  render() {
    return (
      <div className="App">
        <div>
          <AddItemForm />
        </div>
      </div>
    );
  }
}

export default App;

//subject={this.state.subject} task={this.state.task}
