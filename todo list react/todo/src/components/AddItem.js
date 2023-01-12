import React, { PureComponent } from "react";
import "./AddItem.css";

class AddItem extends PureComponent {
  render() {
    console.log("addItem Component");
    const { value, onChange, onClick } = this.props;
    return (
      <form className="form">
        <textarea
          type="text"
          className="task_textarea"
          placeholder="Write Your Task..."
          value={value}
          onChange={(event) => onChange(event)}
        ></textarea>

        <button type="submit" className="button" onClick={(event) => onClick(event)}>
          add
        </button>
      </form>
    );
  }
}

export default AddItem;
