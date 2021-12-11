import Navbar from "../components/Navbar"

import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}


export default MyApp
