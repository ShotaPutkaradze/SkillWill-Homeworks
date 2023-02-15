import React, { memo, useRef } from "react";
import styles from "./EditTask.module.css";

const EditTask = ({ onFormSubmit, task }) => {
  const taskValueRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    if (taskValueRef.current) {
      onFormSubmit(taskValueRef.current.value);
    } else {
      console.log("some ref error");
    }
  };

  return (
    <form onSubmit={(event) => onSubmit(event)} className={styles.addtask_container}>
      <h2>{`edit task:  "${task}"`}</h2>
      <input
        name="Edit task"
        ref={taskValueRef}
        placeholder="Write Your Task..."
        className={styles.input}
      ></input>

      <button className={styles.button}>Edit</button>
    </form>
  );
};

export default memo(EditTask);
