// react
import React, { FunctionComponent, useState } from "react";

// css
import styles from "../styles/components/NightToggle.module.css";

const NightToggle: FunctionComponent = () => {
  const [light, setLight] = useState(true)

  // changes view mode upon click
  const handleViewMode = ():void => {
    setLight(!light)
    const body: HTMLBodyElement | null = document.querySelector('body')
    if (body) body.classList.toggle("night")
  }

  return (
    <div
      className= {light ? styles.boxLight : styles.boxNight}
    >
      <div
        className={light ? styles.buttonLight : styles.buttonNight}
        onClick={():void => handleViewMode()}
      />
    </div>
  );
}

export default NightToggle;
