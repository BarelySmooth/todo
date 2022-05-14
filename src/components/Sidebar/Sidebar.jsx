import React, { useContext } from "react";
import styles from "./Sidebar.module.css";
import BuiltInLists from "../BuiltInLists/BuiltInLists";
import UserCreatedLists from "../UserCreatedLists/UserCreatedLists";
import getLS from "../../lib/getLS";
import { AppContext } from "../../contexts/appContext";

const Sidebar = (props) => {
  const [appState, setAppState] = useContext(AppContext);
  return (
    <div id="sidebar">
      <div className={styles.sidebar_header}>
        <h3>Todo</h3>
      </div>
      <BuiltInLists />
      <UserCreatedLists />

      <div className={styles.sidebar_footer}>
        Open Source on GitHub.{" "}
        <span className={styles.install_app}>Install App.</span>
        <br />
        <br />
        <button
          style={{
            backgroundColor: "#c7dfff",
            border: "1px solid #d9d9d9",
            borderRadius: "4px",
          }}
          onClick={() => {
            console.log(getLS(localStorage.getItem("todo_data")));
            console.log(appState);
          }}
        >
          Log todo data to console
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
