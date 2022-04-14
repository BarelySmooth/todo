import React from "react";
import { useEffect } from "react";
import introModalStyles from "./IntroModal.module.css";
import "animate.css";

const IntroModal = (props) => {
  useEffect(() => {
    if (props.show) {
      document.querySelector("#modal").showModal();
      document.querySelector("#modal").style.display = "flex";
      document
        .querySelector("#modal")
        .classList.add("animate__animated", "animate__zoomIn");
    } else {
      document.querySelector("#modal").style.display = "none";
    }
  }, [props.show]);

  return (
    <div id="modal-container" className={introModalStyles.modal_container}>
      <dialog id="modal" className={`${introModalStyles.modal}`}>
        <div className={introModalStyles.welcome_header}>Welcome to ToDo!</div>
        <div className={introModalStyles.localstorage_notice}>
          <span
            className={`material-icons-round ${introModalStyles.iconOrange}`}
          >
            error
          </span>
          ToDo uses your browser's local storage to store your todos.
        </div>
        {/* TODO: Pressing the ESC key instead of click OK causes "issues" */}
        <button
          id="intro-modal-close"
          className={introModalStyles.intro_modal_close}
          onClick={() => {
            props.closeIntroModal();
            document.querySelector("#modal").close();
            document.querySelector("#modal").style.display = "none";
          }}
        >
          OK
        </button>
      </dialog>
    </div>
  );
};

export default IntroModal;
