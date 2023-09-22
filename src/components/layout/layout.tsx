import { useSession } from "next-auth/react"
import scss from './layout.module.scss'
import SideMenu from "../sidemenu/sidemenu"
import Head  from "next/head"

const Layout = (props : any) => {

    const {data : session} = useSession()

    return (
        <>
        <Head>
        <title>Vex Data Dashboard</title>
        <meta name="description" content="Vex Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className={scss.layout}>
            {session && <SideMenu/>}
            {props.children}
        </main>
        </>
    )

}

export default Layout