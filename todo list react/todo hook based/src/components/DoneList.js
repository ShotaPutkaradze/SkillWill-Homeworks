import React, { memo } from "react";
import "./DoneList.css";

function DoneList(props) {
  return (
    <React.StrictMode>
      {console.log(2)}
      <div className="donelist_container">
        <h3>done: {props.tasks}</h3>
      </div>
    </React.StrictMode>
  );
}

export default memo(DoneList);
