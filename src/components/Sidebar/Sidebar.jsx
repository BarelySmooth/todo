import React from "react";
import styles from "./Sidebar.module.css";
import BuiltInLists from "../BuiltInLists/BuiltInLists";

const Sidebar = (props) => {
  return (
    <div id="sidebar">
      <div className={styles.sidebar_header}>
        <h3>Todo</h3>
      </div>
      <BuiltInLists />
    </div>
  );
};

export default Sidebar;
