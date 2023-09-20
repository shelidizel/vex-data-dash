import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'

export default function App({ session, Component, pageProps }: AppProps) {
  return <SessionProvider session={session}>
    <Component {...pageProps} />
  </SessionProvider>
}
