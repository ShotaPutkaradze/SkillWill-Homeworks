import styles from "./MainPage.module.css";
import useFetchData from "../hooks/useFetchData";
import useSendRequest from "../hooks/useSendRequest";
import Backlog from "../components/Backlog";

const MainPage = () => {
  const { responseData, resendRequest } = useFetchData({
    url: "/api/v1/backlog",
    method: "GET",
  });

  const backlog =
    responseData?.items.map((item) => ({
      task: item.value,
      id: item._uuid,
    })) || [];

  const { sendRequest } = useSendRequest({
    method: "DELETE",
  });

  const deleteTask = (id) => {
    sendRequest(null, `/api/v1/backlog/${id}`)
      .then(() => {
        resendRequest();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.app}>
      <div className={styles.tasks_container}>
        <div className={styles.backlog_container}>
          <header>Backlog | {backlog.length}</header>
          <hr className={styles.line_backlog} />
          {backlog.map((task) => {
            return (
              <Backlog
                deleteTask={deleteTask}
                task={task.task}
                id={task.id}
                key={task.id}
              />
            );
          })}
        </div>
      </div>

      {/* <div className={styles.inprogress_container}>
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
      </div> */}

      {/* <div className={styles.done_container}>
        <header>Done | {done.length}</header>
        <hr className={styles.line_done} />
        {done.map((task, index) => {
          return <Done key={index} tasks={task} />;
        })}
      </div>*/}
    </div>
  );
};

export default MainPage;
