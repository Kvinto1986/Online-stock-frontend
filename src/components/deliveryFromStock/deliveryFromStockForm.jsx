import React, { useState } from 'react'
import Typography from "@material-ui/core/Typography";
import { TextValidator, ValidatorForm, SelectValidator  } from "react-material-ui-form-validator";
// import {registerDelivery} from "../../servies/registerDelivery";
import {
    Grid, Button, Input, Select, Box, Container,
    TextField, InputLabel, MenuItem, FormControl,
} from '@material-ui/core';

import RightBottomAlert from "../common/alerts/rightBottomAlert"

const DeliveryFromStockForm = ({ 
    senderList, carrierList, fetchTtnData, ttnData, managerData, handleSubmit, numberError, submitErrors, alertMessage
 }) => {

    // *** Hooks ***

    const initialState = {
        ttnNumber: '',
        ttnDate: '',
        sender: '',
        transporter: '',
        transportNumber: '',
        carDriverData: '',
        consignmentDescription: '',
        goodsAmount: '',
        goodsTypesAmount: '',
        manager: `${managerData.lastName} ${managerData.firstName} ${managerData.patronymic}`,
        registerDate: '',
        consignmentLabeling: '',
    }

    const [formState, setFormState] = useState(initialState);

    // *** Functions ***

    const handleChange = e => {
        setFormState({...formState, [e.target.name]: e.target.value })
    }

    const reset = () => {
        setFormState(initialState)
    }

    // *** Constants ***

    /* TODO: Create automaticly calculated value inside TTN model */
    const numberOfGoodTypes = (ttnData.products) && [...new Set(ttnData.products.map(product => product.name))].length

    // *** View ***

    return (
        <>
            {alertMessage && (
                <RightBottomAlert message={alertMessage} status={true} />
            )}
            <Container component="main" maxWidth="xs">
                <Box my={12}>
                    <Box my={3}>
                        <Typography component="h1" variant="h5">
                            Register the delivery from stock
                        </Typography>
                    </Box>
                    <ValidatorForm onSubmit={() => handleSubmit(formState)}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Box my={1.5}>
                                    <TextValidator
                                        fullWidth
                                        id="ttnNumber"
                                        label="TTN number"
                                        name="ttnNumber"
                                        autoComplete="ttnNumber"
                                        onChange={handleChange}
                                        validators={['required', 'matchRegexp:[0-9]$']}
                                        errorMessages={['This field is required', 'The value must contain only numbers']}
                                    />
                                </Box>
                                {/* {numberError.err && (
                                    <Typography >
                                        {numberError.err}
                                        <p>f</p>
                                    </Typography>
                                )} */}
                            </Grid>
                            <Button
                                type="button"
                                variant="outlined"
                                color="primary"
                                onClick={() => fetchTtnData(formState.ttnNumber)}
                            >
                                Fetch TTN data
                            </Button>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <Box my={1.5}>
                                    <TextValidator
                                        disabled
                                        value={ttnData.dataOut || ''}
                                        fullWidth
                                        id="ttnDate"
                                        label="TTN discharge date"
                                        name="ttnNumber"
                                        autoComplete="ttnNumber"
                                        onChange={handleChange}
                                        validators={['required']}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <Box my={1.5}>
                                    <FormControl fullWidth>
                                        <InputLabel htmlFor="age-helper">Sender *</InputLabel>
                                        <Select
                                            value={formState.sender || ''}
                                            onChange={handleChange}
                                            input={<Input name="sender" id="age-helper" />}
                                            name="sender"
                                            autoComplete="ttnNumber"
                                            className="senderListSelect"
                                            // validators={['required']}
                                            // errorMessages={['This field is required']}
                                        >
                                            {
                                                senderList.length > 1
                                                ? (
                                                    senderList
                                                    .map(sender => (
                                                        <MenuItem 
                                                            key={sender.id} 
                                                            value={sender.value}>
                                                                {sender.value}
                                                        </MenuItem>
                                                    ))
                                                ) 
                                                : (
                                                    <MenuItem className="notFoundSenderList">
                                                        <em>Senders not found</em>
                                                    </MenuItem>
                                                )
                                            }
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <Box my={1.5}>
                                    <FormControl fullWidth>
                                        <InputLabel htmlFor="age-helper">Transporter*</InputLabel>
                                        <SelectValidator
                                            value={formState.transporter}
                                            onChange={handleChange}
                                            input={<Input name="transporter" />}
                                            name="transporter"
                                            validators={['required']}
                                            errorMessages={['This field is required']}
                                        >
                                            {
                                                carrierList.length > 1
                                                ? (
                                                    carrierList
                                                    .map(carier => (
                                                        <MenuItem 
                                                            key={carier.id} 
                                                            value={carier.value}>
                                                                {carier.value}
                                                        </MenuItem>
                                                    ))
                                                ) 
                                                : (
                                                    <MenuItem value="">
                                                        <em>Senders not found</em>
                                                    </MenuItem>
                                                )
                                            }
                                        </SelectValidator>
                                    </FormControl>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <Box my={1.5}>
                                    <TextValidator
                                        fullWidth
                                        id="ttnNumber"
                                        label="Transport number"
                                        name="transportNumber"
                                        autoComplete="ttnNumber"
                                        onChange={handleChange}
                                        validators={['required', 'matchRegexp:[0-9]$']}
                                        errorMessages={['This field is required', 'The value must contain only numbers']}
                                    />
                                </Box>
                                {/* TODO: If driver not found print the error message */}
                            </Grid>
                        </Grid>
                        {/* TODO: */}
                        {/* ========== If transport type is a car =========== */}
                        {/* <Grid container>
                            <Grid item xs={12}>
                                <Box my={1}>
                                    <TextField
                                        required
                                        id="outlined-multiline-static"
                                        label="Car driver data"
                                        multiline
                                        rows="5"
                                        margin="normal"
                                        variant="outlined"
                                        fullWidth
                                        onChange={handleChange}
                                        name="carDriverData"
                                        validators={['required']}
                                        errorMessages={['This field is required']}
                                    />
                                </Box>
                            </Grid>
                        </Grid> */}
                        {/* ==========****************************=========== */}
                        <Grid container>
                            <Grid item xs={12}>
                                <Box my={0}>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Description of the consignment"
                                        multiline
                                        rows="5"
                                        margin="normal"
                                        variant="outlined"
                                        fullWidth
                                        onChange={handleChange}
                                        name="consignmentDescription"
                                        // validators={['required']}
                                        // errorMessages={['This field is required']}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <Box my={1}>
                                    <TextValidator
                                        // required
                                        disabled
                                        value={Object(ttnData.products).length || ''}
                                        fullWidth
                                        id="ttnNumber"
                                        label="The amount of goods on TTN"
                                        name="goodsAmount"
                                        autoComplete="ttnNumber"
                                        onChange={handleChange}
                                        validators={['required', 'matchRegexp:[0-9]$']}
                                        errorMessages={['This field is required', 'The value must contain only numbers']}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} >
                                <Box my={1.5}>
                                    <TextValidator
                                        // required
                                        disabled
                                        value={numberOfGoodTypes || ''}
                                        fullWidth
                                        label="The number of good's types on TTN"
                                        name="goodsTypesAmount"
                                        autoComplete="goodsTypesAmount"
                                        onChange={handleChange}
                                        validators={['required', 'matchRegexp:[0-9]$']}
                                        errorMessages={['This field is required', 'The value must contain only numbers']}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} >
                                <Box my={1.5}>
                                    <TextValidator
                                        // required
                                        disabled
                                        value={formState.manager}
                                        fullWidth
                                        id="manager"
                                        label="Manager name"
                                        name="manager"
                                        autoComplete="manager"
                                        onChange={handleChange}
                                        validators={['required']}
                                        errorMessages={['This field is required']}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} >
                                <Box my={1.5}>
                                    <TextValidator
                                        // required
                                        disabled
                                        value={ttnData.dataOfRegistration || ''}
                                        fullWidth
                                        id="registerDate"
                                        label="Registration date and time  of TTN"
                                        name="registerDate"
                                        autoComplete="registerDate"
                                        onChange={handleChange}
                                        validators={['required']}
                                        errorMessages={['This field is required']}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <Box my={1}>
                                    <TextField
                                        // required
                                        id="outlined-multiline-static"
                                        label="Description and labeling of the consignment"
                                        multiline
                                        rows="10"
                                        margin="normal"
                                        variant="outlined"
                                        fullWidth
                                        onChange={handleChange}
                                        name="consignmentLabeling"
                                        // validators={['required']}
                                        // errorMessages={['This field is required']}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                        <Box mt={3}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Register delivery
                            </Button>
                        </Box>
                    </ValidatorForm>
                </Box>
            </Container>
        </>
    )
}

export default DeliveryFromStockForm