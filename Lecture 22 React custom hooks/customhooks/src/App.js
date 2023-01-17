import "./App.css";
import React, { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const onClickHandler = () => {
    setDark((dark) => !dark);
  };

  const [dark, setDark] = useLocalStorage("dark", false);

  return (
    <div style={{ backgroundColor: dark ? "black" : "white" }} className="App">
      <button onClick={onClickHandler}>Toggle Theme</button>
    </div>
  );
}

export default App;
