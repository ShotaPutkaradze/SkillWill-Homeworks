import styles from "./MainPage.module.css";
import useFetchData from "../hooks/useFetchData";
import useSendRequest from "../hooks/useSendRequest";
import Backlog from "../components/Backlog";
import InProgress from "../components/InProgress";
import Done from "../components/Done";
import useAddTask from "../hooks/useAddTask";
import { useNavigate } from "react-router-dom";
import React, { memo, useCallback } from "react";

const MainPage = () => {
  const navigate = useNavigate();

  //  backlog data from API ---------------------------------------------------------
  //  GET backlog data
  const {
    responseData: backlogResponseData,
    resendRequest: backlogResendRequest,
    responseError: backlogResponseError,
    isLoading: backlogIsLoading,
  } = useFetchData({
    url: "/api/v1/backlog",
    method: "GET",
  });

  const backlog =
    backlogResponseData?.items.map((item) => ({
      task: item.value,
      id: item._uuid,
    })) || [];

  // Edit Task from backlog
  const editBacklogTask = (id) => {
    navigate(`/edittask/${id}`);
  };

  // Delete Task from backlog
  const { sendRequest: backlogSendRequest } = useSendRequest({
    method: "DELETE",
  });

  // Start Task from backlog
  const { sendPostRequest: inProgressSendPostRequest } = useAddTask("inProgress");

  const startBacklogTask = (id, value) => {
    inProgressSendPostRequest([{ value, isComplited: false }])
      .then((data) => {
        inProgressResendRequest(); //rerender inProgress
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    deleteBacklogTask(id); //delete started task from backlog
  };

  const deleteBacklogTask = useCallback(
    (id) => {
      backlogSendRequest(null, `/api/v1/backlog/${id}`)
        .then(() => {
          backlogResendRequest(); //rerender Backlog
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [backlogSendRequest, backlogResendRequest]
  );

  // Get inProgress data from API -------------------------------------------------------
  const {
    responseData: inProgressResponseData,
    resendRequest: inProgressResendRequest,
    responseError: inProgressResponseError,
    isLoading: inProgressIsLoading,
  } = useFetchData({
    url: "/api/v1/inProgress",
    method: "GET",
  });

  const inProgress =
    inProgressResponseData?.items.map((item) => ({
      task: item.value,
      id: item._uuid,
    })) || [];

  // done InProgress task
  const { sendPostRequest: doneSendPostRequest } = useAddTask("done");
  const doneInProgressTask = (id, value) => {
    doneSendPostRequest([{ value, isComplited: true }])
      .then(() => {
        doneResendRequest(); //rerender done
      })
      .catch((error) => {
        console.log(error);
      });
    deleteInProgressTask(id); //delete started task from InProgress
  };

  // Delete Task from backlog
  const { sendRequest: inProgressSendRequest } = useSendRequest({
    method: "DELETE",
  });
  const deleteInProgressTask = (id) => {
    inProgressSendRequest(null, `/api/v1/inProgress/${id}`)
      .then(() => {
        inProgressResendRequest(); //rerender InProgress
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Get Done data from API -------------------------------------------------------------
  const {
    responseData: doneResponseData,
    resendRequest: doneResendRequest,
    responseError: doneResponseError,
    isLoading: doneIsLoading,
  } = useFetchData({
    url: "/api/v1/done",
    method: "GET",
  });

  const done =
    doneResponseData?.items.map((item) => ({
      task: item.value,
      id: item._uuid,
    })) || [];

  //jsx -------------------------------------------------------------------------------
  if (backlogIsLoading || inProgressIsLoading || doneIsLoading)
    return <p className={styles.p}>Loading...</p>;
  if (backlogResponseError || inProgressResponseError || doneResponseError)
    return <p className={styles.p}>Something was wrong...</p>;

  return (
    <div className={styles.app}>
      <div className={styles.tasks_container}>
        <div className={styles.backlog_container}>
          <header>Backlog | {backlog.length}</header>
          <hr className={styles.line_backlog} />
          {backlog.map((task) => {
            return (
              <Backlog
                deleteTask={deleteBacklogTask}
                editTask={editBacklogTask}
                startTask={startBacklogTask}
                task={task.task}
                id={task.id}
                key={task.id}
              />
            );
          })}
        </div>

        <div className={styles.inprogress_container}>
          <header>In Progress | {inProgress.length}</header>
          <hr className={styles.line_inprogress} />
          {inProgress.map((task) => {
            return (
              <InProgress
                task={task.task}
                key={task.id}
                id={task.id}
                doneTask={doneInProgressTask}
                deleteTask={deleteInProgressTask}
              />
            );
          })}
        </div>

        <div className={styles.done_container}>
          <header>Done | {done.length}</header>
          <hr className={styles.line_done} />
          {done.map((task) => {
            return <Done key={task.id} id={task.id} tasks={task.task} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(MainPage);
