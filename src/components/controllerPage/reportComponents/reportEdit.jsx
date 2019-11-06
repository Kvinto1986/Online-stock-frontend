import React from 'react'
import {Box, Container, Typography} from '@material-ui/core'
import useStyles from '../controlTTNstyle'
import TTNtable from '../controlTTNcargoTable'

const ReportEdit = ({cargo, open, handleChangeTTN}) => {
    const classes = useStyles()

    return (
        <Box mt={15}>
            <Box>
                <Typography component="h1" variant="h3" className={classes.stepNumber}>REPORT EDIT</Typography>
            </Box>
            <Container maxWidth="sm">
                <Box>
                    <TTNtable
                        cargo={cargo}
                        open={open}
                        handleChangeTTN={handleChangeTTN}
                    />
                </Box>
            </Container>
        </Box>
    )
}

export default ReportEdit