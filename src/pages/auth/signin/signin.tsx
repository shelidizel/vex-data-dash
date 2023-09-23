
import Login from "@/components/login"
import { Box } from "@mui/material"
import { useSession } from "next-auth/react"
import React from "react"

const signin = () => {
    const {data : session} = useSession()
    return (
        <Box
        sx={{
            display : "flex",
            flexDirection : 'column',
            justifyContent : 'center',
            alignItems : 'center'
        }}>
            <h2>{session ? "Thank you for logging in" : " Please Log in"}</h2>
            <Login/>
        </Box>
        
    )
}

export default signin