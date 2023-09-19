import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Dashboard from './dashboard'
import Header from './components/header'
import Sidemenu from './components/sidemenu'




export default function Home() {
  return (
    <>
      <Head>
        <title>Vex Data Dashboard</title>
        <meta name="description" content="Vex Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} `}>
        <Header/>
        <Sidemenu/>
        <Dashboard/>
        
      </main>
    </>
  )
}
