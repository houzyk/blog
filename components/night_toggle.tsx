// react
import React, { FunctionComponent, useState } from "react";

// css
import styles from "../styles/components/NightToggle.module.css";

const NightToggle: FunctionComponent = () => {
  // stores view mode state
  const [view, setView] = useState(true)

  // changes view mode upon click
  const handleViewMode = ():void => {
    setView(!view)
    const body: HTMLBodyElement | null = document.querySelector('body')
    if (body) body.classList.toggle("night")
  }

  return (
    <div
    aria-label="toggle night mode"
      className= {view ? styles.boxLight : styles.boxNight}
      onClick={():void => handleViewMode()}
    >
      <div
        className={view ? styles.buttonLight : styles.buttonNight}
      />
    </div>
  );
}

export default NightToggle;
