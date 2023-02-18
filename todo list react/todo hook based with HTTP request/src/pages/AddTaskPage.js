import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AddTask from "../components/AddTask";
import styles from "./AddTaskPage.module.css";
import useSendRequest from "../hooks/useSendRequest";

const AddTaskPage = () => {
  const navigate = useNavigate();

  const { sendRequest, isLoading } = useSendRequest({
    method: "POST",
  });

  const onFormSubmit = useCallback(
    (value) => {
      sendRequest([{ value, list: "backlog", isComplited: false }])
        .then((data) => {
          console.log(data);
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [navigate, sendRequest]
  );

  if (isLoading) return <p className={styles.p}>Loading...</p>;
  return <AddTask onFormSubmit={onFormSubmit} />;
};

export default memo(AddTaskPage);
