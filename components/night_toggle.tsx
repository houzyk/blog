// react
import React, { FunctionComponent } from "react";

// css
import styles from "../styles/components/NightToggle.module.css";

const NightToggle: FunctionComponent = () => {

  // changes view mode upon click
  const handleViewMode = ():void => {
    const body: HTMLBodyElement | null = document.querySelector('body')
    if (body) body.classList.toggle("night")
  }

  return (
    <div
      className= {styles.toggleBox}
    >
      <div
        className={styles.button}
        onClick={():void => handleViewMode()}
      />
    </div>
  );
}

export default NightToggle;
