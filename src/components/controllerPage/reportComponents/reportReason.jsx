import React, {useState} from 'react'
import {Box, Typography, Container, FormControl, Input, InputLabel, Select, MenuItem, Button} from '@material-ui/core'
import useStyles from '../controlTTNstyle'
import {ValidatorForm} from 'react-material-ui-form-validator'

const ReportReason = ({finishStep, selectOptionsData}) => {
    const classes = useStyles();
    const [reason, setReason] = useState({});

    let reportType = [];

    const hendleSelectChange = e => {
        const reasonNumber = e.target.value;
        const reasonType = reportType[reasonNumber-1];

        setReason({reasonNumber, reasonType})
    };

    return (
        <Box>
            <Container maxWidth="sm">
                <Box mb={5}>
                    <Typography component="h1" variant="h3" className={classes.stepNumber}>REPORT REASON</Typography>
                </Box>
                <Box>
                    <ValidatorForm onSubmit={() => finishStep('first', reason)}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="grouped-select">Reason</InputLabel>
                            <Select
                                required
                                fullWidth
                                value={reason.reasonNumber || ''}
                                onChange={hendleSelectChange}
                                input={<Input name="reason" id="age-helper" />}
                                name="reason"
                                autoComplete="reasonNumber"
                            >
                                {selectOptionsData.map(option => {
                                    reportType.push(option.value);
                                    return (
                                        <MenuItem key={option.key} value={option.key}>
                                            {option.value}
                                        </MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>
                        <Box mt={4}>
                            <Button
                                type="submit"
                                variant="contained"
                                size="medium"
                                color="primary"
                            >
                                Save
                            </Button>
                        </Box>
                    </ValidatorForm>
                </Box>
            </Container>
        </Box>
    )
}

export default ReportReason
