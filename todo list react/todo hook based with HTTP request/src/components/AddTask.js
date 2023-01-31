import React, { memo } from "react";
import styles from "./AddTask.module.css";

function AddTask(props) {
  const { value, onChange, onSubmit } = props;

  return (
    <React.StrictMode>
      <form className={styles.addtask_container} onSubmit={onSubmit}>
        <input
          name="task"
          type="text"
          className={styles.textarea}
          placeholder="Write Your Task..."
          value={value}
          onChange={(event) => onChange(event)}
        ></input>

        <button type="submit" className={styles.button}>
          Add
        </button>
      </form>
    </React.StrictMode>
  );
}

export default memo(AddTask);
