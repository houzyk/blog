// next
import type { NextPage } from 'next'
import Head from 'next/head'

// components
import Footer from '../components/footer'
import Navbar from '../components/navbar'

// css
import styles from '../styles/pages/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='container'>
      <Head>
        <title>The Philosophical Code</title>
      </Head>
      <Navbar />
      <Footer />
    </div>
  )
}

export default Home
