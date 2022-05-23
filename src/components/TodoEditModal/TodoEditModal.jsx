import React, { useEffect } from "react";
import styles from "./TodoEditModal.module.css";

const TodoEditModal = (props) => {
  useEffect(() => {
    if (props.show) {
      document
        .querySelector("#todo_edit_modal")
        .classList.add("animate__animated", "animate__slideInUp");
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
        Edit Todo
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
          OK
        </button>
      </dialog>
    </div>
  );
};

export default TodoEditModal;
