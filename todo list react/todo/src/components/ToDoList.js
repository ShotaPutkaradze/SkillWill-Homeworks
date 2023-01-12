import React, { PureComponent } from "react";
import "./ToDoList.css";
class ToDoList extends PureComponent {
  render() {
    console.log("TodoList Component");
    const { task, onDeleteClick, onDoneCLick, index } = this.props;
    return (
      <div className="todo_form">
        <h4 className="h4">{task}</h4>
        <div className="buttons_div">
          <button
            type="submit"
            className="button"
            onClick={(event) => onDeleteClick(event, index)}
          >
            delete
          </button>
          <button
            type="submit"
            className="button"
            onClick={(event) => onDoneCLick(event, index)}
          >
            done
          </button>
        </div>
      </div>
    );
  }
}

export default ToDoList;
