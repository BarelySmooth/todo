import React, { useEffect, useContext } from "react";
import { AppContext } from "../../contexts/appContext";
import styles from "./TodoEditModal.module.css";

const TodoEditModal = (props) => {
  const [appState, setAppState] = useContext(AppContext);

  useEffect(() => {
    if (props.show) {
      document
        .querySelector("#todo_edit_modal")
        .classList.add("animate__animated", "animate__zoomIn");
      document.querySelector("#todo_edit_modal").showModal();
      document.querySelector("#todo_edit_modal").style.display = "flex";
    } else {
      document.querySelector("#todo_edit_modal").style.display = "none";
    }
  }, [props.show]);

  return (
    <div id="todo_edit_modal-container" className={styles.modal_container}>
      <dialog
        id="todo_edit_modal"
        className={`${styles.modal}`}
        style={{ "--animate-duration": "0.5s" }}
      >
        <div className={styles.modal_type_display}>
          Edit Todo - {appState.currentOpenedTodo?.name}
        </div>

        {/* text input */}
        <label className={styles.modal_input_label}>
          <span className={styles.modal_input_label_text}>Todo Name:</span>
          <input
            className={styles.modal_input}
            type="text"
            value={appState.currentOpenedTodo?.name}
          />
        </label>

        <button
          id="todo_edit_modal-close"
          className={styles.intro_modal_close}
          onClick={async () => {
            document
              .querySelector("#todo_edit_modal")
              .classList.add("animate__animated", "animate__backOutDown");
            props.saveUpdatedData();

            document.querySelector("#todo_edit_modal").close();
            document.querySelector("#todo_edit_modal").style.display = "none";
          }}
        >
          Save
        </button>
      </dialog>
    </div>
  );
};

export default TodoEditModal;
