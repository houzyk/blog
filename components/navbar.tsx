// react
import React, { FunctionComponent } from "react"

// next
import { NextRouter, useRouter } from "next/router"

// css
import styles from "../styles/components/Navbar.module.css"

const Navbar: FunctionComponent = () => {
  const router: NextRouter = useRouter()

  return (
    <nav>
      <div
        onClick={(): Promise<boolean> => router.push('/')}
      >
        the-philosophical-code
      </div>
    </nav>
  )
}

export default Navbar
