import { Box, Grid, Paper } from "@mui/material"
import DataRibbon from "@/components/dashbord/dataribbon"
import scss from './dashboard.module.scss'

const dashboard = () => {
    return (
        <Box>
            <DataRibbon/>
        </Box>
    )
}

export default dashboard