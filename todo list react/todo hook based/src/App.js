import React, { useState, useCallback } from "react";
import "./App.css";
import AddItem from "./components/Additem";
import TodoList from "./components/TodoList";
import DoneList from "./components/DoneList";

function App() {
  let [value, setValue] = useState("");
  let [tasksTodo, setTasksTodo] = useState([]);
  let [tasksDone, setTasksDone] = useState([]);

  const onChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const onAddClickHandler = useCallback(
    (event) => {
      event.preventDefault();
      setTasksTodo((currentArr) => {
        const tmpArr = [...currentArr];
        tmpArr.push(value);
        setValue("");
        return [...tmpArr];
      });
    },
    [value]
  );

  const onDeleteClickHandler = useCallback(
    (event, index) => {
      event.preventDefault();
      setTasksTodo(() => {
        const tmpArr = [...tasksTodo];
        tmpArr.splice(index, 1);
        return [...tmpArr];
      });
    },
    [tasksTodo]
  );

  const onDoneClickHandler = useCallback(
    (event, index) => {
      event.preventDefault();
      const tmpTodo = [...tasksTodo];
      const tmpDone = [...tasksDone];
      tmpDone.unshift(tmpTodo.splice(index, 1)[0]);
      setTasksDone(() => [...tmpDone]);
      setTasksTodo(() => [...tmpTodo]);
    },
    [tasksTodo, tasksDone]
  );

  return (
    <React.StrictMode>
      <div className="App">
        <header className="header">To Do APP</header>
        <div className="main_container">
          <div className="todo_container">
            <AddItem
              value={value}
              onClick={onAddClickHandler}
              onChange={onChangeHandler}
            />

            {tasksTodo.map((task, index) => {
              return (
                <TodoList
                  task={task}
                  key={index}
                  onDeleteClick={onDeleteClickHandler}
                  onDoneCLick={onDoneClickHandler}
                  index={index}
                />
              );
            })}
          </div>

          <div className="done_container">
            {tasksDone.map((task, index) => {
              return <DoneList key={index} tasks={task} />;
            })}
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default App;
