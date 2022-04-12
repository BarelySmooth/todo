import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = (props) => {
  return (
    <div id="sidebar">
      <div className={styles.sidebar_header}>
        <h3>Todo</h3>
      </div>
    </div>
  );
};

export default Sidebar;
