// react
import React, { FunctionComponent } from "react"

// css
import styles from "../styles/components/Today.module.css"

const Today: FunctionComponent = () => {
  const dateToday: Date = new Date()
  return (
    <p>
      {dateToday.getDate()}/{dateToday.getMonth() + 1}/{dateToday.getFullYear()}
    </p>
  );
}

export default Today
