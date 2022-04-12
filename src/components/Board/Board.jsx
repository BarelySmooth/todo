import React from "react";
import styles from "./Board.module.css";

const Sidebar = (props) => {
  return (
    <div id="board">
      <div className={styles.board_header}>
        <h3>No list selected</h3>
      </div>
    </div>
  );
};

export default Sidebar;
