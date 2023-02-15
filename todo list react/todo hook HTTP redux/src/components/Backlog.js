import React, { memo } from "react";

import styles from "./Backlog.module.css";

function Backlog(props) {
  const { task, deleteTask, editTask, startTask, id } = props;

  const onDeleteClick = (event) => {
    event.preventDefault();
    deleteTask(id);
  };
  const onEditClick = (event) => {
    event.preventDefault();
    editTask(id);
  };
  const onStartClick = (event) => {
    event.preventDefault();
    startTask(id, task);
  };

  return (
    <React.StrictMode>
      <div className={styles.main_container}>
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
    </React.StrictMode>
  );
}

export default memo(Backlog);
