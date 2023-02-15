import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AddTask from "../components/AddTask";
import useAddTask from "../hooks/useAddTask";
import styles from "./AddTaskPage.module.css";

const AddTaskPage = () => {
  const navigate = useNavigate();

  const { sendPostRequest, isLoading } = useAddTask("backlog");

  const onFormSubmit = useCallback(
    (value) => {
      sendPostRequest([{ value, isComplited: false }])
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [navigate, sendPostRequest]
  );

  if (isLoading) return <p className={styles.p}>Loading...</p>;
  return <AddTask onFormSubmit={onFormSubmit} />;
};

export default memo(AddTaskPage);
