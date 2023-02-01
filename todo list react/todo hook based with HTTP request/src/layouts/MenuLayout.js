import { Link, Outlet } from "react-router-dom";
import styles from "./MenuLayout.module.css";

const MainPage = () => {
  return (
    <div className={styles.menu_counteiner}>
      <header className={styles.header}>
        <Link to="/">ALL TASKS</Link>
        <Link to="addtask">ADD A TASK</Link>
      </header>

      <Outlet />
    </div>
  );
};

export default MainPage;
