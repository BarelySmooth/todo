import React, { useState, useEffect, useContext } from "react";
import styles from "./Board.module.css";
import IntroModal from "../IntroModal/IntroModal";
import { AppContext } from "../../contexts/appContext";
import getLS from "../../lib/getLS";

const Board = (props) => {
  // const [currentModalType, setCurrentModalType] = useState("");

  // useEffect(() => {
  //   if (!localStorage.getItem("init")) {
  //     // localStorage.setItem("init", "true");
  //     setCurrentModalType("intro");
  //   }
  // }, []);

  const [appState, setAppState] = useContext(AppContext);

  const returnListNameFromID = (id) => {
    const arrayOfBuiltInLists = [
      { key: "today", value: "For today", icon: "today" },
      { key: "all", value: "All todos", icon: "clear_all" },
      { key: "important", value: "Important Todos", icon: "assignment_late" },
      { key: "due_soon", value: "Due Soon", icon: "history" },
      { key: "backlog", value: "Backlog", icon: "ac_unit" },
    ];

    if (arrayOfBuiltInLists.find((list) => list.key === id)) {
      return arrayOfBuiltInLists.find((list) => list.key === id).value;
    } else {
      return getLS(localStorage.getItem("todo_data"))[
        appState.currentSelectedList.parentList
      ].sub_lists.filter((list) => list.id === id)[0].name;
    }
  };

  return (
    <div id="board">
      <IntroModal
        show={localStorage.getItem("init") === "true" ? false : true}
        closeIntroModal={() => {
          localStorage.setItem("init", "true");
        }}
      />
      <div className={styles.board_header}>
        <h3>{returnListNameFromID(appState.currentSelectedList.childList)}</h3>
      </div>
    </div>
  );
};

export default Board;
