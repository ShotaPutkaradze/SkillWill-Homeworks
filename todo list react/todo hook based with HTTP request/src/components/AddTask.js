import React, { memo, useState } from "react";
import styles from "./AddTask.module.css";

function AddTask({ onSubmit }) {
  const [value, setValue] = useState("");

  const onTaskAddClickHandler = (event) => {
    event.preventDefault();
    onSubmit(value);
    setValue("");
  };

  return (
    <React.StrictMode>
      <form className={styles.addtask_container} onSubmit={onTaskAddClickHandler}>
        <input
          name="task"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Write Your Task..."
          className={styles.textarea}
        ></input>

        <button type="Submit" className={styles.button}>
          Add
        </button>
      </form>
    </React.StrictMode>
  );
}

export default memo(AddTask);
