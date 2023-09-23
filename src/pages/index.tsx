
import Dashboard from './dashboard'
import { useSession } from 'next-auth/react'
import Login from '@/components/login'
import scss from './Home.module.scss'




const Home: React.FC = () => {
  const {data : session} = useSession()
  return (
    <>
      <main className={scss.main}>
        

        {session && <Dashboard/>}
        
      </main>
    </>
  )
}

export default Home
