import React, { useState } from "react";
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

  const onAddClickHandler = (event) => {
    event.preventDefault();
    if (value) {
      const tmpArr = [...tasksTodo];
      tmpArr.push(value);
      setTasksTodo(tmpArr);
      setValue("");
    } else {
      alert("Please Write Task");
    }
  };

  const onDeleteClickHandler = (event, index) => {
    event.preventDefault();
    const tmpArr = [...tasksTodo];
    tmpArr.splice(index, 1);
    setTasksTodo(tmpArr);
  };

  const onDoneClickHandler = (event, index) => {
    event.preventDefault();
    const tmpTodo = [...tasksTodo];
    const tmpDone = [...tasksDone];
    tmpDone.unshift(tmpTodo.splice(index, 1)[0]);
    setTasksTodo([...tmpTodo]);
    setTasksDone([...tmpDone]);
  };

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
