import React from "react";
import styles from "./Sidebar.module.css";
import BuiltInLists from "../BuiltInLists/BuiltInLists";
import UserCreatedLists from "../UserCreatedLists/UserCreatedLists";

const Sidebar = (props) => {
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
      </div>
    </div>
  );
};

export default Sidebar;
