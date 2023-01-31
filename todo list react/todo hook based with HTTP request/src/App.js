import React, { useState, useCallback, useEffect } from "react";
import styles from "./App.module.css";
import AddTask from "./components/AddTask";
import Backlog from "./components/Backlog";
import InProgress from "./components/InProgress";
import Done from "./components/Done.js";

function App() {
  const API_KEY = "P_ow9x2JA3poWQttDtMcjHos3qCVBfHHVDiPAt9oLIJZ9AxVq"; //g

  const [value, setValue] = useState("");
  const [backlog, setBacklog] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [done, setDone] = useState([]);

  const onChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const onAddClickHandler = useCallback((event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const inputTaskValue = Object.fromEntries(formData.entries());

    if (inputTaskValue.task) {
      setValue("");
      setBacklog((currentArr) => {
        const tmpArr = [...currentArr];
        tmpArr.unshift(inputTaskValue.task);
        inputTaskValue.task = "";
        return [...tmpArr];
      });
    } else {
      alert("please add some task");
    }
  }, []);

  const onBacklogDeleteClickHandler = useCallback(
    (event, index) => {
      event.preventDefault();
      setBacklog(() => {
        const tmpBacklog = [...backlog];
        tmpBacklog.splice(index, 1);
        return [...tmpBacklog];
      });
    },
    [backlog]
  );

  const onStartClickHandler = useCallback(
    (event, index) => {
      event.preventDefault();
      const tmpBacklog = [...backlog];
      const tmpInProgress = [...inProgress];
      tmpInProgress.unshift(tmpBacklog.splice(index, 1)[0]);
      setBacklog(() => [...tmpBacklog]);
      setInProgress(() => [...tmpInProgress]);
    },
    [backlog, inProgress]
  );

  const onInProgressDeleteClickHandler = useCallback(
    (event, index) => {
      event.preventDefault();
      setInProgress(() => {
        const tmpInProgress = [...inProgress];
        tmpInProgress.splice(index, 1);
        return [...tmpInProgress];
      });
    },
    [inProgress]
  );

  const onDoneClickHandler = useCallback(
    (event, index) => {
      event.preventDefault();
      const tmpInProgress = [...inProgress];
      const tmpDone = [...done];
      tmpDone.unshift(tmpInProgress.splice(index, 1)[0]);
      setInProgress(() => [...tmpInProgress]);
      setDone(() => [...tmpDone]);
    },
    [inProgress, done]
  );

  useEffect(() => {
    fetch("/api/v1/backlog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify([{ backlog }]),
    })
      .then((response) => {
        // /if (!response.ok) throw new Error("response error");
        console.log(response);
        return response.JSON;
      })
      .then((data) => {
        // console.log("data");
      })
      .catch((error) => console.error(error));
  }, [onAddClickHandler, backlog]);

  return (
    <React.StrictMode>
      <div className={styles.app}>
        <div className={styles.addtask_container}>
          <AddTask
            onSubmit={onAddClickHandler}
            onChange={onChangeHandler}
            value={value}
          />
        </div>

        <div className={styles.tasks_container}>
          <div className={styles.backlog_container}>
            <header>Backlog | {backlog.length}</header>
            <hr className={styles.line_backlog} />
            {backlog.map((task, index) => {
              return (
                <Backlog
                  task={task}
                  key={index}
                  onDeleteClick={onBacklogDeleteClickHandler}
                  onStartCLick={onStartClickHandler}
                  index={index}
                />
              );
            })}
          </div>

          <div className={styles.inprogress_container}>
            <header>In Progress | {inProgress.length}</header>
            <hr className={styles.line_inprogress} />
            {inProgress.map((task, index) => {
              return (
                <InProgress
                  task={task}
                  key={index}
                  index={index}
                  onDeleteClick={onInProgressDeleteClickHandler}
                  onDoneClock={onDoneClickHandler}
                />
              );
            })}
          </div>

          <div className={styles.done_container}>
            <header>Done | {done.length}</header>
            <hr className={styles.line_done} />
            {done.map((task, index) => {
              return <Done key={index} tasks={task} />;
            })}
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default App;
