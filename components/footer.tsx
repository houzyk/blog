// react
import React, { FunctionComponent } from "react";

// css
import styles from "../styles/components/Footer.module.css";

// components
import NightToggle from "./night_toggle";

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <NightToggle />
    </footer>
  );
}

export default Footer;
