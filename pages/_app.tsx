import '../styles/globals.css'
import type { AppProps } from 'next/app'

// component
import Footer from '../components/footer'
import Navbar from '../components/navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </>
  );

}

export default MyApp
