import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../contexts/appContext";
import styles from "./BuiltInLists.module.css";

const Board = (props) => {
  const [appState, setAppState] = useContext(AppContext);

  // the value of the "icon" key is what the fonts library calls them
  const arrayOfBuiltInLists = [
    { key: "today", value: "For today", icon: "today" },
    { key: "all", value: "All todos", icon: "clear_all" },
    { key: "important", value: "Important Todos", icon: "assignment_late" },
    { key: "due_soon", value: "Due Soon", icon: "history" },
    { key: "backlog", value: "Backlog", icon: "ac_unit" },
  ];

  const handleBuiltInListClick = (id) => {
    setAppState({
      ...appState,
      currentSelectedList: {
        parentList: "built_in",
        childList: id,
      },
    });
  };

  return (
    <div className={styles.built_in_lists}>
      <ul>
        {arrayOfBuiltInLists.map((list) => {
          return (
            <li
              key={list.key}
              onClick={() => {
                handleBuiltInListClick(list.key);
              }}
              className={
                list.key === appState.currentSelectedList.childList
                  ? styles.selected_list
                  : ""
              }
            >
              <span
                className={`material-icons-outlined ${styles.blue_list_icon}`}
              >
                {list.icon}
              </span>
              {list.value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Board;
