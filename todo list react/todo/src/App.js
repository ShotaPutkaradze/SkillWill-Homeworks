import React, { Component } from "react";
import "./App.css";
import AddItem from "./components/AddItem";
import ToDoList from "./components/ToDoList";

class App extends Component {
  state = {
    value: "",
    tasks: [],
  };

  onChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  onDeleteClick = (index) => {
    const tmpArray = [...this.state.tasks];
    tmpArray.splice(index, 1);
    this.setState({
      tasks: [...tmpArray],
    });
  };

  onAddClick = (event) => {
    event.preventDefault();
    if (this.state.value) {
      this.setState({
        value: "",
        tasks: [...this.state.tasks, { task: this.state.value, done: false }],
      });
    } else {
      alert("please white task");
    }
  };

  render() {
    return (
      <div className="App">
        <header className="header">To Do APP</header>
        {this.state.tasks.map((task, index) => {
          return (
            <ToDoList
              task={task.task}
              key={index}
              onClick={() => this.onDeleteClick(index)}
            />
          );
        })}

        <AddItem
          value={this.state.value}
          onClick={(event) => this.onAddClick(event)}
          onChange={(event) => this.onChange(event)}
        />
      </div>
    );
  }
}

export default App;
