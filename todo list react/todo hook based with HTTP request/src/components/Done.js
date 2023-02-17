import React, { memo } from "react";
import styles from "./Done.module.css";

function Done(props) {
  return (
    <>
      <div className={styles.main_container}>
        <h4> {props.tasks}</h4>
      </div>
    </>
  );
}

export default memo(Done);
