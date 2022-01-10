// next
import type { NextPage } from "next"
import Head from "next/head"

// css
import styles from "../styles/pages/Article.module.css"

// components
import Navbar from "../components/navbar"

const HelloComputer: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hello, Computer!</title>
      </Head>
      <Navbar/>
    </>
  )
}

export default HelloComputer
