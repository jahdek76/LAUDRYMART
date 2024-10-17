import '../styles/globals.css'
import type { AppProps as NextAppProps } from 'next/app'

type AppProps = NextAppProps & {
    pageProps: any
  }
  
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp