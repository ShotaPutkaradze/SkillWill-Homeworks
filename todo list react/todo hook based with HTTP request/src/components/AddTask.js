import React, { memo, useRef } from "react";
import styles from "./AddTask.module.css";

function AddTask({ onSubmit }) {
  const taskValueRef = useRef();

  const onTaskAddClickHandler = (event) => {
    event.preventDefault();
    if (taskValueRef.current) {
      onSubmit(taskValueRef.current.value);
    } else {
      console.log("some ValueRef was not find");
    }
  };

  return (
    <React.StrictMode>
      <form className={styles.addtask_container} onSubmit={onTaskAddClickHandler}>
        <input
          name="task"
          ref={taskValueRef}
          placeholder="Write Your Task..."
          className={styles.input}
        ></input>

        <button type="Submit" className={styles.button}>
          Add
        </button>
      </form>
    </React.StrictMode>
  );
}

export default memo(AddTask);
