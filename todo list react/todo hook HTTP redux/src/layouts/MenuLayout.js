import { Link, Outlet } from "react-router-dom";
import React, { memo } from "react";
import styles from "./MenuLayout.module.css";

const MainPage = () => {
  return (
    <div className={styles.menu_counteiner}>
      <header className={styles.header}>
        <Link className={styles.link} to="/">
          ALL TASKS
        </Link>
        <Link className={styles.link} to="addtask">
          ADD NEW TASK
        </Link>
      </header>

      <Outlet />
    </div>
  );
};

export default memo(MainPage);
