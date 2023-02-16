import React, { memo, useCallback } from "react";

import styles from "./Backlog.module.css";

function Backlog(props) {
  const { task, deleteTask, editTask, startTask, id } = props;

  const onDeleteClick = useCallback(
    (event) => {
      event.preventDefault();
      deleteTask(id);
    },
    [deleteTask, id]
  );
  const onEditClick = useCallback(
    (event) => {
      event.preventDefault();
      editTask(id);
    },
    [editTask, id]
  );
  const onStartClick = useCallback(
    (event) => {
      event.preventDefault();
      startTask(id, task);
    },
    [id, startTask, task]
  );

  const setColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
  };
  console.log("backlog rendered");

  return (
    <div
      className={styles.main_container}
      style={{
        border: `2px solid #${setColor()}`,
      }}
    >
      <h4>{task}</h4>
      <div className={styles.buttons_container}>
        <button className={styles.button} onClick={(event) => onDeleteClick(event)}>
          Delete
        </button>
        <button className={styles.button} onClick={(event) => onEditClick(event)}>
          Edit
        </button>
        <button className={styles.button} onClick={(event) => onStartClick(event)}>
          Start
        </button>
      </div>
    </div>
  );
}

export default memo(Backlog);
