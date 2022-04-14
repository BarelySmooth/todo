import React, { useState, useEffect } from "react";
import styles from "./Board.module.css";
import IntroModal from "../IntroModal/IntroModal";

const Board = (props) => {
  // const [currentModalType, setCurrentModalType] = useState("");

  // useEffect(() => {
  //   if (!localStorage.getItem("init")) {
  //     // localStorage.setItem("init", "true");
  //     setCurrentModalType("intro");
  //   }
  // }, []);

  return (
    <div id="board">
      <IntroModal
        show={localStorage.getItem("init") === "true" ? false : true}
        closeIntroModal={() => {
          localStorage.setItem("init", "true");
        }}
      />
      <div className={styles.board_header}>
        <h3>No list selected</h3>
      </div>
    </div>
  );
};

export default Board;
