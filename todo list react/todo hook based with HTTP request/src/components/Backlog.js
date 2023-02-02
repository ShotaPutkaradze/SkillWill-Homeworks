import React, { memo } from "react";

import styles from "./Backlog.module.css";

function Backlog(props) {
  const { task, deleteTask, id } = props;

  const setColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
  };

  const onDeleteClick = (event) => {
    event.preventDefault();
    deleteTask(id);
  };

  return (
    <React.StrictMode>
      <div
        className={styles.main_container}
        style={{
          borderColor: `#${setColor()}`,
        }}
      >
        <h4>{task}</h4>
        <div className={styles.buttons_container}>
          <button className={styles.button} onClick={(event) => onDeleteClick(event)}>
            Delete
          </button>
          {/* <button className={styles.button} onClick={(event) => onStartCLick(event)}>
            Edit
          </button>
          <button className={styles.button} onClick={(event) => onStartCLick(event)}>
            Start
          </button> */}
        </div>
      </div>
    </React.StrictMode>
  );
}

export default memo(Backlog);
