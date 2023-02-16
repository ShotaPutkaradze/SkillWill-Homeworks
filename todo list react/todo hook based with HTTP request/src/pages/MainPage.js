import styles from "./MainPage.module.css";
import useFetchData from "../hooks/useFetchData";
import useSendRequest from "../hooks/useSendRequest";
import Backlog from "../components/Backlog";
import InProgress from "../components/InProgress";
import Done from "../components/Done";
import useAddTask from "../hooks/useAddTask";
import { useNavigate } from "react-router-dom";
import React, { memo, useCallback, useEffect, useState } from "react";

const MainPage = () => {
  const navigate = useNavigate();
  const [backlog, setBacklog] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [done, setDone] = useState([]);

  //  backlog data from API ---------------------------------------------------------
  const {
    responseData: backlogResponseData,
    resendRequest: backlogResendRequest,
    responseError: backlogResponseError,
    isLoading: backlogIsLoading,
  } = useFetchData({
    url: "/api/v1/backlog",
    method: "GET",
  });

  useEffect(() => {
    setBacklog(
      backlogResponseData?.items.map((item) => ({
        task: item.value,
        id: item._uuid,
      })) || []
    );
  }, [backlogResponseData?.items]);

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

  useEffect(() => {
    setInProgress(
      inProgressResponseData?.items.map((item) => ({
        task: item.value,
        id: item._uuid,
      })) || []
    );
  }, [inProgressResponseData?.items]);

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

  useEffect(() => {
    setDone(
      doneResponseData?.items.map((item) => ({
        task: item.value,
        id: item._uuid,
      })) || []
    );
  }, [doneResponseData?.items]);

  // Edit Task from backlog
  const editBacklogTask = useCallback(
    (id) => {
      navigate(`/edittask/${id}`);
    },
    [navigate]
  );

  // Delete Task from backlog
  const { sendRequest: backlogSendRequest } = useSendRequest({
    method: "DELETE",
  });

  // Delete Task from InProgress
  const { sendRequest: inProgressSendRequest } = useSendRequest({
    method: "DELETE",
  });

  // done InProgress task
  const { sendPostRequest: doneSendPostRequest } = useAddTask("done");

  //clicks functions------------------------------------------------------------------------
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

  // Start Task from backlog
  const { sendPostRequest: inProgressSendPostRequest } = useAddTask("inProgress");
  const startBacklogTask = useCallback(
    (id, value) => {
      inProgressSendPostRequest([{ value, isComplited: false }])
        .then(() => {
          inProgressResendRequest(); //rerender inProgress
        })
        .catch((error) => {
          console.log(error);
        });
      deleteBacklogTask(id); //delete started task from backlog
    },
    [deleteBacklogTask, inProgressResendRequest, inProgressSendPostRequest]
  );

  const deleteInProgressTask = useCallback(
    (id) => {
      inProgressSendRequest(null, `/api/v1/inProgress/${id}`)
        .then(() => {
          inProgressResendRequest(); //rerender InProgress
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [inProgressResendRequest, inProgressSendRequest]
  );

  const doneInProgressTask = useCallback(
    (id, value) => {
      doneSendPostRequest([{ value, isComplited: true }])
        .then(() => {
          doneResendRequest(); //rerender done
        })
        .catch((error) => {
          console.log(error);
        });
      deleteInProgressTask(id);
    },
    [deleteInProgressTask, doneResendRequest, doneSendPostRequest]
  );

  //jsx -------------------------------------------------------------------------------

  if (backlogResponseError || inProgressResponseError || doneResponseError)
    return <p className={styles.p}>Something was wrong...</p>;

  return (
    <div className={styles.app}>
      <div className={styles.tasks_container}>
        <div className={styles.backlog_container}>
          <header>Backlog | {backlog.length}</header>
          <hr className={styles.line_backlog} />
          {backlogIsLoading ? (
            <h3>Loading...</h3>
          ) : (
            <Backlog
              backlogList={backlog}
              deleteTask={deleteBacklogTask}
              editTask={editBacklogTask}
              startTask={startBacklogTask}
            />
          )}
        </div>

        <div className={styles.inprogress_container}>
          <header>In Progress | {inProgress.length}</header>
          <hr className={styles.line_inprogress} />

          {inProgressIsLoading ? (
            <h3>Loading...</h3>
          ) : (
            <InProgress
              inProgressList={inProgress}
              doneTask={doneInProgressTask}
              deleteTask={deleteInProgressTask}
            />
          )}
        </div>

        <div className={styles.done_container}>
          <header>Done | {done.length}</header>
          <hr className={styles.line_done} />
          {doneIsLoading ? (
            <h3>Loading...</h3>
          ) : (
            done.map((task) => {
              return <Done key={task.id} id={task.id} tasks={task.task} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(MainPage);
