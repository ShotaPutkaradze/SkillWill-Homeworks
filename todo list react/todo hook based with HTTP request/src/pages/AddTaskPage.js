import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import AddTask from "../components/AddTask";
import useAddTask from "../hooks/useAddTask";
import styles from "./AddTaskPage.module.css";

const AddTaskPage = () => {
  const navigate = useNavigate();

  const { sendPostRequest, isLoading } = useAddTask("backlog");

  const onFormSubmit = (value) => {
    sendPostRequest([{ value, isComplited: false }])
      .then((data) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (isLoading) return <p className={styles.p}>Loading...</p>;
  return (
    <React.StrictMode>
      <AddTask onFormSubmit={onFormSubmit} />
    </React.StrictMode>
  );
};

export default memo(AddTaskPage);
