import React, { useState, useEffect } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator"
import { Container, Box, Typography, Grid, Button } from "@material-ui/core"
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import DateFnsUtils from '@date-io/date-fns';
import { findTTNbyNumber } from '../../../actions/ttnActions'
import { connect } from 'react-redux'

const WarehousingDataForm = props => {

    const initialFormState = {
        ttnIsExists: "",
        ttnNumber: "",
        ttnDate: "",
        managerName: "",
        operatorName: "",
        deliveryForStorageDate: ""
    };

    const [formState, setFormState] = useState(initialFormState);

    const handleChange = e => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const findTTN = () => {
        console.log(formState.ttnNumber);
        
        props.findTTNbyNumber({ ttnNumber: formState.ttnNumber })
        .then(value => console.log(value))
        // .then(result => {
        //     const {data} = result

        //     if (data) {
        //         setFormState({
        //             ...formState, 
        //             ttnIsExists: true,
        //             ttnDate: data.dataOfRegistration, 
        //             managerName: props.auth.user.name,
        //             operatorName: data.sender
        //         })
        //     }
        //     else {
        //         setFormState({
        //             ...formState, 
        //             ttnIsExists: false,
        //             ttnDate: '', 
        //             managerName: '',
        //             operatorName: '',
        //             deliveryForStorageDate: ''
        //         })
        //     }
        // })
    }

    const {ttnNumber, ttnDate, managerName, operatorName, ttnIsExists} = formState
    const isDisabled = (ttnIsExists === true) ? false : true
    
    return (
        <Container component="main" maxWidth="xs">
            <Box mt={5}>
                <Box>
                    <Typography compoment="h1" variant="h5">
                        Transfer goods to store
                    </Typography>
                </Box>
                <ValidatorForm>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box my={1.5}>
                                <TextValidator
                                    required
                                    fullWidth
                                    id="ttnNumber"
                                    label="TTN number"
                                    name="ttnNumber"
                                    autoComplete="ttnNumber"
                                    onChange={handleChange}
                                    value={ttnNumber}
                                />
                                {(ttnIsExists === false) && (
                                    <p style={{color: 'red'}}>TTN not found</p>
                                )}
                                <Box mt={2} mb={5}>
                                    <Button
                                        type="button"
                                        onClick={findTTN}
                                        variant="contained"
                                    >
                                        Fetch TTN data
                                    </Button>
                                </Box>
                                <TextValidator
                                    disabled
                                    fullWidth
                                    id="ttnDate"
                                    label="TTN register date"
                                    name="ttnDate"
                                    autoComplete="ttnDate"
                                    onChange={handleChange}
                                    value={ttnDate}
                                />

                                <TextValidator
                                    disabled
                                    fullWidth
                                    id="managerName"
                                    label="Manager name"
                                    name="managerName"
                                    autoComplete="managerName"
                                    onChange={handleChange}
                                    value={managerName}
                                />
                                <TextValidator
                                    disabled
                                    fullWidth
                                    id="operatorName"
                                    label="TTN operator name"
                                    name="operatorName"
                                    autoComplete="operatorName"
                                    onChange={handleChange}
                                    value={operatorName}
                                />
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        required
                                        disabled={isDisabled}
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Date of goods delivery for storage"
                                        onChange={handleChange}
                                        // KeyboardButtonProps={{
                                        //     'aria-label': 'change date',
                                        // }}
                                        name="deliveryForStorageDate"
                                        fullWidth
                                        // validators={['required']}
                                        // errorMessages={['His field is required']}
                                    />
                                </MuiPickersUtilsProvider>
                            </Box>
                        </Grid>
                    </Grid>
                </ValidatorForm>
            </Box>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    ttnData: state.ttnData
});

export default connect(mapStateToProps, {
    findTTNbyNumber
})(WarehousingDataForm)