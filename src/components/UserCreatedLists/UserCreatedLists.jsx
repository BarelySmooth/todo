import React, { useContext } from "react";
import { AppContext } from "../../contexts/appContext";
import styles from "./UserCreatedLists.module.css";

const UserCreatedLists = (props) => {
  const [appState, setAppState] = useContext(AppContext);
  let todo_data = JSON.parse(localStorage.getItem("todo_data"));

  const handleListClick = (id, parentList) => {
    setAppState({
      ...appState,
      currentSelectedList: {
        parentList: parentList,
        childList: id,
      },
    });
  };

  return (
    <div className={styles.user_created_lists}>
      {Object.keys(todo_data)?.map((parentList, index) => {
        return (
          <div className={styles.user_created_list} key={index}>
            <h4>{todo_data[parentList]["name"]}</h4>
            <ul>
              {todo_data[parentList]["sub_lists"]?.map((sub_list, index) => {
                return (
                  <li
                    key={index}
                    className={
                      appState.currentSelectedList.childList == sub_list.id
                        ? styles.selected_list
                        : "j"
                    }
                    onClick={() => {
                      handleListClick(sub_list.id, parentList);
                    }}
                  >
                    {sub_list.name}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default UserCreatedLists;
