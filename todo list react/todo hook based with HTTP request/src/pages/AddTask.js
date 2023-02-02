import React, { memo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import usePostMethod from "../hooks/usePostMethod";
import styles from "./AddTask.module.css";

function AddTask() {
  const taskValueRef = useRef();
  const navigate = useNavigate;
  // const onTaskAddClickHandler = (event) => {
  //   event.preventDefault();
  //   if (taskValueRef.current) {
  //     onSubmit(taskValueRef.current.value);
  //   } else {
  //     console.log("some ValueRef was not find");
  //   }
  // };
  const { sendPostMethod, isLoading } = usePostMethod({
    url: "/api/v1/backlog",
    method: "POST",
  });
  const onFormSubmitHandler = (taskValueRef) => {
    sendPostMethod([{ taskValueRef }]).then((data) => {
      navigate("/");
    });
  };
  return (
    <React.StrictMode>
      <form className={styles.addtask_container} onSubmit={onFormSubmitHandler}>
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
