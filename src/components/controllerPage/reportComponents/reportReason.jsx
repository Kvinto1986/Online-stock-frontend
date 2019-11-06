import React, {useState} from 'react'
import {Box, Typography, Container, FormControl, Input, InputLabel, Select, MenuItem, Button} from '@material-ui/core'
import useStyles from '../controlTTNstyle'
import InputText from '../../fields/textField'
import {ValidatorForm} from 'react-material-ui-form-validator'

const ReportReason = ({finishStep, selectOptionsData}) => {
    const classes = useStyles()
    const [reportReason, setReportReason] = useState('')
    const [otherReason, setOtherReason] = useState('')

    const hendleSelectChange = e => {
        setOtherReason('')
        setReportReason(e.target.value)
    }

    const finalReason = otherReason ? otherReason : reportReason

    return (
        <Box>
            <Container maxWidth="sm">
                <Box>
                    <Typography component="h1" variant="h3" className={classes.stepNumber}>REPORT REASON</Typography>
                </Box>
                <Box>
                    <ValidatorForm onSubmit={() => finishStep('first', {finalReason})}>
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
                                // error={errors.senderErr && true}
                            >
                                {selectOptionsData.map(option => (
                                    <MenuItem key={option.key} value={option.value}>
                                        {option.value}
                                    </MenuItem> 
                                ))}
                            </Select>
                        </FormControl>
                        {reportReason === 'Other...' && (
                            <Box mt={2}>
                                <InputText
                                    min={10}
                                    max={500}
                                    pattern={/^[a-zA-Z]*$/}
                                    fullWidth
                                    label="Other report reason"
                                    required
                                    name="otherReason"
                                    value={otherReason}
                                    handleChange={setOtherReason}
                                    helperClass={classes.inputError}
                                    error={{}}
                                    validators={[]}
                                    errorMessages={[]}
                                />
                            </Box>
                        )}
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