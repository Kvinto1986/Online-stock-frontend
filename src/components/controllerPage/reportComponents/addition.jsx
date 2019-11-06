import React from 'react'
import {Box, Typography, Paper, TextField} from '@material-ui/core'
import useStyles from '../controlTTNstyle'

const Addition = ({setReport, report, open}) => {
    const classes = useStyles()
    return (
        <Box>
            <Box>
                <Typography component="h1" variant="h3" className={classes.stepNumber}>ADDITION</Typography>
            </Box>
                <Box>
                    <Paper className={classes.dialogPaper}>
                        <Typography component="h2" variant="h6" align="center" color="textPrimary" style={{marginTop: '3%'}}
                                    gutterBottom>
                            Write a report
                        </Typography>
                        <TextField
                            label="Report"
                            multiline
                            rowsMax="7"
                            style={{marginTop: '3%', width: '80%', marginLeft: '10%', marginBottom: '5%'}}
                            margin="normal"
                            onChange={(e) => setReport(e.target.value)}
                            defaultValue={report}
                            autoFocus={open}
                        />
                    </Paper>
                </Box>
        </Box>
    )
}

export default Addition