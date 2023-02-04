import React, { memo } from "react";
import styles from "./InProgress.module.css";

function InProgress(props) {
  const { task, doneTask, id } = props;
  const setColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
  };

  const onDoneClick = (event) => {
    event.preventDefault();
    doneTask(id);
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
          <button className={styles.button} onClick={(event) => onDoneClick(event)}>
            Done
          </button>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default memo(InProgress);
