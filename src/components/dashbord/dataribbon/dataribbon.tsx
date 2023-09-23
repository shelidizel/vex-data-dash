import { Grid, Icon, IconButton, Paper, Tooltip, Typography } from "@mui/material"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import scss from "./DataRibbon.module.scss"
import DataCard from "../dataCard"

const dataribbon = () => {
    return (
        <>
        <h2>Data Ribbon</h2>
        <Grid className={scss.dataRibbon}>
       <Grid>
       <DataCard
       title="Total Sales"
       value = "462"
       desc="The total sales for vex products in the current year"/>
       </Grid>
       <Grid>
       <DataCard
       title="Total Value"
       value = "21"
       desc="The total value of sold products"/>
       </Grid>
       <Grid>
       <DataCard
       title="Avg Order Value"
       value = "$12.4"
       desc="The average order value for sales in this financial year"/>
       </Grid>
       <Grid>
       <DataCard
       title="Conversion rate"
       value = "12%"
       desc="The conversion rate of pitchs to sales"/>
       </Grid>
       </Grid>
       </>
    )
}

export default dataribbon