import React, { memo } from "react";

import styles from "./Backlog.module.css";

function Backlog(props) {
  const { backlogList, deleteTask, editTask, startTask } = props;

  const setColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
  };
  console.log("backlog rendered");

  return backlogList.map((task) => {
    return (
      <div
        key={task.id}
        className={styles.main_container}
        style={{
          border: `2px solid #${setColor()}`,
        }}
      >
        <h4>{task.task}</h4>
        <div className={styles.buttons_container}>
          <button className={styles.button} onClick={() => deleteTask(task.id)}>
            Delete
          </button>
          <button className={styles.button} onClick={() => editTask(task.id)}>
            Edit
          </button>
          <button className={styles.button} onClick={() => startTask(task.id, task.task)}>
            Start
          </button>
        </div>
      </div>
    );
  });
}

export default memo(Backlog);
