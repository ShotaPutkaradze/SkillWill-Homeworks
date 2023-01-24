import React, { memo } from "react";
import styles from "./AddTask.module.css";

function AddTask(props) {
  const { value, onChange, onClick } = props;
  return (
    <React.StrictMode>
      <div className={styles.addtask_container}>
        <textarea
          type="text"
          className={styles.textarea}
          placeholder="Write Your Task..."
          value={value}
          onChange={(event) => onChange(event)}
        ></textarea>

        <button
          type="submit"
          className={styles.button}
          onClick={(event) => onClick(event)}
        >
          Add
        </button>
      </div>
    </React.StrictMode>
  );
}

export default memo(AddTask);
