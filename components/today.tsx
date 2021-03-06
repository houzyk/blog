// react
import React, { FunctionComponent } from "react"

// css
import styles from "../styles/components/Today.module.css"

const Today: FunctionComponent = () => {
  const dateToday: Date = new Date()

  let day: string = `${dateToday.getDate()}`
  if (dateToday.getDate() < 9) day = 0 + day

  let month: string = `${dateToday.getMonth() + 1}`
  if (dateToday.getMonth() < 9) month = 0 + month

  return (
    <time
      dateTime={String(dateToday)}
    >
      {day}/{month}/{dateToday.getFullYear()}
    </time>
  )
}

export default Today
