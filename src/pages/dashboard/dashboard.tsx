import { Box, Grid, Paper } from "@mui/material"
import scss from './dashboard.module.scss'

const dashboard = () => {
    return (
        <Box>
            <Grid container gap={2} className={scss.topCardsContainer}>
                <Grid>
                    <Paper className={scss.dataCard}>xs=4</Paper>
                </Grid>
                <Grid>
                    <Paper className={scss.dataCard}>xs=4</Paper>
                </Grid>
                <Grid>
                    <Paper className={scss.dataCard}>xs=4</Paper>
                </Grid>
            </Grid>
            <Grid xs={12} marginY={2}>
                <Paper className={scss.dataCard}>xs=8</Paper>
            </Grid>
        </Box>
    )
}

export default dashboard