import React from "react";
import styles from "./NavBarItems.module.css";

function NavBarItems({ name }) {
  return <div className={styles.mainContainer}>{name}</div>;
}

export default NavBarItems;
