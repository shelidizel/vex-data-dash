import Button from "@mui/material/Button"
import {useSession, signIn, signOut} from "next-auth/react"
const Login = () => {

    const {data : session} = useSession()

    if(session) {
        return (
            <>
        Signed in as {session.user?.email as string} <br/>
        <Button variant={'contained'} color={'error'} onClick={() => {signOut()}}>Sign Out</Button>
        </>
        )
    }
    return (
        <>
        Please Sign in <br/>
        <Button variant={'contained'} color={'success'}  onClick={() => {signIn()}}>Sign In</Button>
        </>
    )


}

export default Login