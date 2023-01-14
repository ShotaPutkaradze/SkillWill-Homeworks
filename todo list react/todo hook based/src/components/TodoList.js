import React from "react";
import "./TodoList.css";

function TodoList(props) {
  const { task, onDeleteClick, onDoneCLick, index } = props;
  return (
    <React.StrictMode>
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
    </React.StrictMode>
  );
}

export default TodoList;
