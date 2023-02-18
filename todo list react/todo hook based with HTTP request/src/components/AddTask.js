import React, { memo, useRef } from "react";
import styles from "./AddTask.module.css";

const AddTask = ({ onFormSubmit }) => {
  const taskValueRef = useRef(null);

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
      <input
        name="task"
        placeholder="Write Your Task..."
        ref={taskValueRef}
        className={styles.input}
      ></input>

      <button className={styles.button}>Add</button>
    </form>
  );
};

export default memo(AddTask);
