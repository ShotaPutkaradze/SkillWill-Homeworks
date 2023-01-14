import React from "react";
import "./AddItem.css";

function AddItem(props) {
  const { value, onChange, onClick } = props;
  return (
    <React.StrictMode>
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
    </React.StrictMode>
  );
}

export default AddItem;
