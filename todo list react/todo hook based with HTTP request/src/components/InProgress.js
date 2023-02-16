import React, { memo, useCallback } from "react";
import styles from "./InProgress.module.css";

function InProgress(props) {
  const { task, doneTask, deleteTask, id } = props;

  const onDoneClick = useCallback(
    (event) => {
      event.preventDefault();
      doneTask(id, task);
    },
    [doneTask, id, task]
  );
  const onDeleteClick = useCallback(
    (event) => {
      event.preventDefault();
      deleteTask(id, task);
    },
    [deleteTask, id, task]
  );

  const setColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
  };
  return (
    <div
      className={styles.main_container}
      style={{
        border: `2px solid #${setColor()}`,
      }}
    >
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
  );
}

export default memo(InProgress);
