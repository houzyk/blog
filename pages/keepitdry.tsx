// next
import type { NextPage } from "next"
import Head from "next/head"

// css
import styles from "../styles/pages/Article.module.css"

// components
import Navbar from "../components/navbar"

const KeepItDry: NextPage = () => {
  return (
    <>
      <Head>
        <title>Keep It Dry</title>
      </Head>
      <Navbar/>
    </>
  )
}

export default KeepItDry
