import React, {useState} from 'react'
import {Box, Button, Container, Typography} from '@material-ui/core'
import useStyles from '../controlTTNstyle'
import EditTable from './editTable'
import FastPanel from './fastPanel'

const ReportEdit = ({initialCargo, cargo, reportReason, handleChangeTTN, finishStep, setCheckedCargo}) => {
    const classes = useStyles()
    const [isAllSelected, selectAll] = useState(false)
    const [editData, setEditData] = useState()

    const getEditData = data => {
        setEditData({...editData, data})
    }
    
    return (
        <Box mt={25} mb={10}>
            <Box mb={5}>
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
                        getEditData={getEditData}
                    />
                </Box>
                <Box mt={5}>
                    <a href="#yak1">
                        <Button
                            type="button"
                            onClick={() => finishStep('second', {cargo, editData})}
                            variant="contained" 
                            size="medium"
                            color="primary"
                        >
                            Edit
                        </Button>
                    </a>
                </Box>
            </Container>
        </Box>
    )
}

export default ReportEdit