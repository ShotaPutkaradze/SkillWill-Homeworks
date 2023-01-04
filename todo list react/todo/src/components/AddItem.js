import React, { Component } from "react";
import "./AddItem.css";

class AddItem extends Component {
  render() {
    return (
      <form className="form">
        <textarea
          type="text"
          className="task_textarea"
          placeholder="Write Your Task..."
          value={this.props.value}
          onChange={this.props.onChange}
        ></textarea>

        <button type="submit" className="button" onClick={this.props.onClick}>
          add
        </button>
      </form>
    );
  }
}

export default AddItem;
