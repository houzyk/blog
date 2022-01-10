// react
import React, { FunctionComponent } from "react"

// css
import styles from "../styles/components/Today.module.css"

const Today: FunctionComponent = () => {
  const dateToday: Date = new Date()
  let month: string = `0${dateToday.getMonth() + 1}`
  if (dateToday.getMonth() > 9) month = 0 + month
  return (
    <p>
      {dateToday.getDate()}/{month}/{dateToday.getFullYear()}
    </p>
  );
}

export default Today
