import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { Web3ContextProvider } from '../context/Web3Context'

import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ContextProvider>

      <>
        <Component {...pageProps} />
        <ToastContainer
          hideProgressBar
          position="bottom-right"
          autoClose={2000}
        />
      </>
      </Web3ContextProvider>

  )
}

export default MyApp