import React, { memo } from "react";
import styles from "./InProgress.module.css";

function InProgress(props) {
  const { task, onDeleteClick, onDoneClock, index } = props;
  const setColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <React.StrictMode>
      <div
        className={styles.main_container}
        style={{
          border: `1px solid #${setColor()}`,
        }}
      >
        <h4>{task}</h4>
        <div className={styles.buttons_container}>
          <button
            type="submit"
            className={styles.button}
            onClick={(event) => onDeleteClick(event, index)}
          >
            Delete
          </button>
          <button
            type="submit"
            className={styles.button}
            onClick={(event) => onDoneClock(event, index)}
          >
            Done
          </button>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default memo(InProgress);
