import React, { memo } from "react";
import styles from "./Done.module.css";

function Done(props) {
  return (
    <React.StrictMode>
      {console.log("DoneList component rendered")}
      <div className={styles.main_container}>
        <h4> {props.tasks}</h4>
      </div>
    </React.StrictMode>
  );
}

export default memo(Done);
