import React, { memo } from "react";
import styles from "./InProgress.module.css";

function InProgress(props) {
  const { inProgressList, doneTask, deleteTask } = props;

  const setColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
  };

  return inProgressList.map((task) => {
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
          <button className={styles.button} onClick={() => doneTask(task.id, task.task)}>
            Done
          </button>
          <button className={styles.button} onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </div>
      </div>
    );
  });
}

export default memo(InProgress);
