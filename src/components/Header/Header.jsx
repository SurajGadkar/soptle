import React from "react";
import styles from "./Header.module.css";

import NavBar from "../NavBar/NavBar";
function Header() {
  return (
    <div className={styles.mainContainer}>
      <NavBar />
    </div>
  );
}

export default Header;
