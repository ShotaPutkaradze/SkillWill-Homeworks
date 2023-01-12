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
              onClick={this.onAddClickHandler}
              onChange={this.onChangeHandler}
            />
            {this.state.tasksTodo.map((task, index) => (
              <ToDoList
                task={task.task}
                key={index}
                onDeleteClick={this.onDeleteClickHandler}
                onDoneCLick={this.onDoneClickHandler}
                index={index}
              />
            ))}
          </div>

          <div className="done_container">
            {this.state.tasksDone.map((task) => (
              <DoneList key={task.task} tasks={task.task} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
