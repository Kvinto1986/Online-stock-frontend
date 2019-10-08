import React, { useState, useEffect } from "react"
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator"
import { Container, Box, Typography, Grid, Button } from "@material-ui/core"
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns";
import { findTTNbyNumber } from "../../../actions/ttnActions"
import { connect } from "react-redux"

const WarehousingDataForm = ({ dndIsShown, getFormData, ...props}) => {

    const initialFormState = {
        ttnIsExists: null,
        ttnNumber: "",
        ttnDate: "",
        managerInitials: "",
        operatorName: "",
        deliveryForStorageDate: ""
    }

    const [formState, setFormState] = useState(initialFormState);

    useEffect(() => {
        if(props.ttnData&&Object.keys(props.ttnData).length > 0) {
            const ttnData = props.ttnData
            const { firstName, lastName, patronymic } = props.auth.user
            const managerInitials = `${firstName} ${lastName} ${patronymic}`
            
            setFormState({
                ...formState, 
                ttnIsExists: true,
                ttnDate: ttnData.dataOfRegistration, 
                managerInitials,
                operatorName: ttnData.sender,
            })

            getFormData(ttnData, managerInitials)
        }
    }, [props.ttnData])

    useEffect(() => {
        if (Object.keys(props.errors).length > 0) {
            
            setFormState({
                ...formState, 
                ttnIsExists: false,
                ttnDate: "", 
                managerInitials: "",
                operatorName: "",
                deliveryForStorageDate: ""
            })
        }
    }, [props.errors])

    const handleChange = e => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const findTTN = () => {
        props.findTTNbyNumber(formState.ttnNumber, dndIsShown)
    }
    
    const {ttnNumber, ttnDate, managerInitials, operatorName, ttnIsExists} = formState
    
    return (
        <Container component="main" maxWidth="xs">
            <Box mt={5}>
                <Box>
                    <Typography compoment="h1" variant="h5">
                        Transfer goods to store
                    </Typography>
                </Box>
                <ValidatorForm onSubmit={() => {}}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box>
                                <Box>
                                    <TextValidator
                                        required
                                        fullWidth
                                        id="ttnNumber"
                                        label="TTN number"
                                        name="ttnNumber"
                                        autoComplete="ttnNumber"
                                        onChange={handleChange}
                                        value={ttnNumber || ""}
                                    />
                                    {((ttnIsExists === false) || Object.keys(props.errors).length > 0) && (
                                        <p style={{color: "red"}}>TTN not found</p>
                                    )}
                                </Box>
                                <Box mt={2}>
                                    <Button
                                        type="button"
                                        onClick={findTTN}
                                        variant="outlined"
                                    >
                                        Fetch TTN data
                                    </Button>
                                </Box>
                            </Box>
                            <Box>
                                <Box mt={2}>
                                    <TextValidator
                                        disabled
                                        fullWidth
                                        id="ttnDate"
                                        label="TTN register date"
                                        name="ttnDate"
                                        autoComplete="ttnDate"
                                        onChange={handleChange}
                                        value={ttnDate || ""}
                                    />
                                </Box>
                                <Box mt={2}>
                                    <TextValidator
                                        disabled
                                        fullWidth
                                        id="managerInitials"
                                        label="Manager initials"
                                        name="managerInitials"
                                        autoComplete="managerInitials"
                                        onChange={handleChange}
                                        value={managerInitials || ""}
                                    />
                                </Box>
                                <Box mt={2}>
                                    <TextValidator
                                        disabled
                                        fullWidth
                                        id="operatorName"
                                        label="TTN operator name"
                                        name="operatorName"
                                        autoComplete="operatorName"
                                        onChange={handleChange}
                                        value={operatorName || ""}
                                    />
                                </Box>
                                <Box mt={1}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            required
                                            disabled
                                            disableToolbar
                                            variant="inline"
                                            format="MM/dd/yyyy"
                                            margin="normal"
                                            id="date-picker-inline"
                                            label="Date of goods delivery for storage"
                                            onChange={handleChange}
                                            name="deliveryForStorageDate"
                                            fullWidth
                                        />
                                    </MuiPickersUtilsProvider>
                                </Box>
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
    ttnData: state.ttn,
    errors: state.errors
})

export default connect(mapStateToProps, {
    findTTNbyNumber
})(WarehousingDataForm)