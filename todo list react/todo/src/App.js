import React, { Component } from "react";
import "./App.css";
import AddItem from "./components/AddItem";
import ToDoList from "./components/ToDoList";
import DoneList from "./components/DoneList";

class App extends Component {
  state = {
    value: "",
    tasksTodo: [],
    tasksDone: [],
  };

  onChangeHandler = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  onAddClickHandler = (event) => {
    event.preventDefault();
    if (this.state.value) {
      this.setState({
        value: "",
        tasksTodo: [...this.state.tasksTodo, { task: this.state.value, done: false }],
      });
    } else {
      alert("Please Write Task");
    }
    console.log(event);
  };

  onDeleteClickHandler = (event, index) => {
    event.preventDefault();
    const tmpTodo = [...this.state.tasksTodo];
    tmpTodo.splice(index, 1);
    this.setState({
      tasksTodo: [...tmpTodo],
    });
  };

  onDoneClickHandler = (event, index) => {
    event.preventDefault();
    const tmpTodo = [...this.state.tasksTodo];
    tmpTodo[index].done = true;
    const tmpDone = [...this.state.tasksDone];
    tmpDone.unshift(tmpTodo.splice(index, 1)[0]);
    this.setState({
      tasksTodo: [...tmpTodo],
      tasksDone: [...tmpDone],
    });
  };

  render() {
    return (
      <div className="App">
        <header className="header">To Do APP</header>
        <div className="main_container">
          <div className="todo_container">
            <AddItem
              value={this.state.value}
              onClick={(event) => this.onAddClickHandler(event)}
              onChange={(event) => this.onChangeHandler(event)}
            />
            {this.state.tasksTodo.map((task, index) => (
              <ToDoList
                task={task.task}
                key={index}
                onDeleteClick={(event) => this.onDeleteClickHandler(event, index)}
                onDoneCLick={(event) => this.onDoneClickHandler(event, index)}
              />
            ))}
          </div>

          <div className="done_container">
            {this.state.tasksDone.map((task, index) => (
              <DoneList key={index} tasks={task.task} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
