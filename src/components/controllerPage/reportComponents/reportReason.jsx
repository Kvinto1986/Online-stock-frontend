import React, {useState} from 'react'
import {Box, Typography, Container, FormControl, Input, InputLabel, Select, MenuItem, Button} from '@material-ui/core'
import useStyles from '../controlTTNstyle'
import {ValidatorForm} from 'react-material-ui-form-validator'

const ReportReason = ({finishStep, selectOptionsData, setReportType}) => {
    const classes = useStyles()
    const [reportReason, setReportReason] = useState('')

    let reportType = []

    const hendleSelectChange = e => {
        const reasonNumber = e.target.value
        setReportReason(reasonNumber)
        setReportType(reportType[reasonNumber-1])
    }
    return (
        <Box>
            <Container maxWidth="sm">
                <Box>
                    <Typography component="h1" variant="h3" className={classes.stepNumber}>REPORT REASON</Typography>
                </Box>
                <Box>
                    <ValidatorForm onSubmit={() => finishStep('first', {reportReason})}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="grouped-select">Reason</InputLabel>
                            <Select
                                required
                                fullWidth
                                value={reportReason}
                                onChange={hendleSelectChange}
                                input={<Input name="reason" id="age-helper" />}
                                name="reason"
                                autoComplete="reportReason"
                            >
                                {selectOptionsData.map(option => {
                                    reportType.push(option.value)
                                    return (
                                        <MenuItem key={option.key} value={option.key}>
                                            {option.value}
                                        </MenuItem> 
                                    )
                                })}
                            </Select>
                        </FormControl>
                        <Box mt={4}>
                            <Button type="submit">
                                Submit
                            </Button>
                        </Box>
                    </ValidatorForm>
                </Box>
            </Container>
        </Box>
    )
}

export default ReportReason