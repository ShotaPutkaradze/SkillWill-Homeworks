import { FC } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./MenuLayout.module.css";

const MenuLayout: FC = () => {
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

export default MenuLayout;
