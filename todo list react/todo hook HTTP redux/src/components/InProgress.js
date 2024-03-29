import React, { memo } from "react";
import styles from "./InProgress.module.css";

function InProgress(props) {
  const { task, doneTask, deleteTask, id } = props;

  const onDoneClick = (event) => {
    event.preventDefault();
    doneTask(id, task);
  };
  const onDeleteClick = (event) => {
    event.preventDefault();
    deleteTask(id, task);
  };

  return (
    <React.StrictMode>
      <div className={styles.main_container}>
        <h4>{task}</h4>
        <div className={styles.buttons_container}>
          <button className={styles.button} onClick={(event) => onDoneClick(event)}>
            Done
          </button>
          <button className={styles.button} onClick={(event) => onDeleteClick(event)}>
            Delete
          </button>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default memo(InProgress);
