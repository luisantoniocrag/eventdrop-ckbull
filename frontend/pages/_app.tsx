import Header from '@/components/Header/Header'
import { AppContextProvider } from '@/contexts/AppContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "react-datepicker/dist/react-datepicker.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Header />
      <Component {...pageProps} />
    </AppContextProvider>
  )
}
