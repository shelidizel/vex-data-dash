import { Grid, IconButton, Paper, Tooltip, Typography } from "@mui/material"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import scss from './datacard.module.scss'

export type DataCardProps = {
    title : string,
    value : string,
    desc : string
}

const DataCard = (props : DataCardProps) => {
    const { title, value, desc} = props
    return (
        <Grid container>
        <Paper className={scss.DataGrid}>
            <div className={scss.Header}>
                <Typography fontSize = "h6"color="lightslategray">
                    {title}
                </Typography>

                <Tooltip
                title = {
                    <Typography>
                        {desc}
                    </Typography>
                }>
                    <IconButton>
                        <InfoOutlinedIcon/>
                        </IconButton>
                </Tooltip>
            </div>
            <Typography>{value}</Typography>
        </Paper>
    </Grid>
    )
}

export default DataCard