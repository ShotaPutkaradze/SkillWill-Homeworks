import React, { Component } from "react";
import "./ToDoList.css";
class ToDoList extends Component {
  render() {
    return (
      <div className="todo_form">
        <h4 className="h4">{this.props.task}</h4>
        <div className="buttons_div">
          <button type="submit" className="button" onClick={this.props.onDeleteClick}>
            delete
          </button>
          <button type="submit" className="button" onClick={this.props.onDoneCLick}>
            done
          </button>
        </div>
      </div>
    );
  }
}

export default ToDoList;
