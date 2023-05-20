import React from "react";
import styles from "./NavBar.module.css";
import NavBarItems from "../NavBarItems/NavBarItems";

function NavBar() {
  return (
    <div className={styles.mainContainer}>
      <NavBarItems name={"Home"} />
      <NavBarItems name={"Flights"} />
      <NavBarItems name={"Routes"} />
      <NavBarItems name={"Search"} />
    </div>
  );
}

export default NavBar;
