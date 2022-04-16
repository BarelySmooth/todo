import React from "react";
import styles from "./PageNotice.module.css";

const PageNotice = (props) => {
  // I don't want to see this when testing locally
  // plus, this banner makes it clear that I'm not on localhost lol
  if (window.location.host !== "barelysmooth.github.io") {
    return;
  }

  return <div className={styles.page_notice}>This is still WIP</div>;
};

export default PageNotice;
