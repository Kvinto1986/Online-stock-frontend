import React, {useState} from 'react'
import {Box, Button, Container, Typography} from '@material-ui/core'
import useStyles from '../controlTTNstyle'
import EditTable from './editTable'
import FastPanel from './fastPanel'

const ReportEdit = ({initialCargo, cargo, reportReason, handleChangeTTN, finishStep, setCheckedCargo}) => {
    const classes = useStyles()
    const [isAllSelected, selectAll] = useState(false)
    return (
        <Box mt={25}>
            <Box>
                <Typography component="h1" variant="h3" className={classes.stepNumber}>REPORT EDIT</Typography>
            </Box>
            <Container fixed>
                <Box>
                    <FastPanel 
                        isAllSelected={isAllSelected}
                        selectAll={selectAll}
                    />
                    <EditTable
                        cargo={cargo}
                        reportReason={reportReason}
                        handleChangeTTN={handleChangeTTN}
                        setCheckedCargo={setCheckedCargo}
                        isAllSelected={isAllSelected}
                        selectAll={selectAll}
                    />
                </Box>
                <Box>
                    <Button
                        type="button"
                        onClick={() => finishStep('second', {cargo, initialCargo})}
                    >
                        Edit
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}

export default ReportEdit