import React, { memo } from "react";
import styles from "./Backlog.module.css";

function Backlog(props) {
  const { task, index, onDeleteClick, onStartCLick } = props;

  const setColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <React.StrictMode>
      <div
        className={styles.main_container}
        style={{
          border: `2px solid #${setColor()}`,
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
            onClick={(event) => onStartCLick(event, index)}
          >
            Start
          </button>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default memo(Backlog);
