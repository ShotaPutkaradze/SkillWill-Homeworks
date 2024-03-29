import React, { memo, useCallback } from "react";
import styles from "./EditTaskPage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import EditTask from "../components/EditTask";
import useFetchData from "../hooks/useFetchData";
import useSendRequest from "../hooks/useSendRequest";

const EditTaskPage = () => {
  const navigate = useNavigate();
  const { taskId } = useParams();

  const { responseData, responseError, isLoading } = useFetchData({
    url: `/api/v1/backlog/${taskId}`,
    method: "GET",
  });

  const { sendRequest } = useSendRequest({
    url: `/api/v1/backlog/${taskId}`,
    method: "PUT",
  });

  const onFormSubmit = useCallback(
    (value) => {
      sendRequest({ value: value })
        .then((data) => {
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [navigate, sendRequest]
  );

  if (isLoading || !responseData) return <p className={styles.p}>Loading...</p>;

  if (responseError || !responseData)
    return <p className={styles.p}>Something is wrong...</p>;

  return <EditTask onFormSubmit={onFormSubmit} task={responseData.value} />;
};

export default memo(EditTaskPage);
