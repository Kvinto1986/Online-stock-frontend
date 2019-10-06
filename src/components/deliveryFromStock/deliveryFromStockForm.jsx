import React, { useState, useEffect } from 'react'
import Typography from "@material-ui/core/Typography";
import { TextValidator, ValidatorForm  } from "react-material-ui-form-validator";
// import {registerDelivery} from "../../servies/registerDelivery";
import {
    Grid, Button, Input, Select, Box, Container,
    TextField, InputLabel, MenuItem, FormControl,
} from '@material-ui/core';

import RightBottomAlert from "../common/alerts/rightBottomAlert"

const DeliveryFromStockForm = ({ 
    senderList, carrierList, fetchTtnData, managerData, submitAction, submitErrors, alertMessage, saveAlertMessage
}) => {

    // *** Hooks ***

    const initialFormState = {
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
        alertMessage: ''
    }

    const initialErrorsState = {}

    const [formState, setFormState] = useState(initialFormState);
    const [errors, setErrors] = useState(initialErrorsState)

    // *** Functions ***

    const handleChange = e => {
        setFormState({...formState, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        if(alertMessage) {
            setFormState({...formState, alertMessage})
            setFormState(initialFormState)
            setTimeout(() => {
                saveAlertMessage(null)
            }, 3000)
        }
    }, [alertMessage])

    const handleTtnFetch = () => {
        fetchTtnData({ttnNumber: formState.ttnNumber})
        .then(res => {
            if(res) {
                if(res.status === "warehoused") {
                    const {dataOut, products, dataOfRegistration} = res
                    /* TODO: Create automaticly calculated value inside TTN model */
                    const numberOfGoodTypes = (products) && [...new Set(products.map(product => product.name))].length
                    
                    setFormState({
                        ...formState,
                        ttnDate: dataOut,
                        goodsAmount: products.length,
                        goodsTypesAmount: numberOfGoodTypes,
                        registerDate: dataOfRegistration
                    })
                    setErrors({...errors, numberError: ""})
                }
                else {
                    setErrors({...errors, numberError: "TTN №" + formState.ttnNumber + " hasn't been warehoused"})
                    setFormState(initialFormState)
                }
            }
            else {
                setErrors({...errors, numberError: "TTN №" + formState.ttnNumber + " is not found"})
                setFormState(initialFormState)
            }
        })
        .catch(() => setErrors({...errors, numberError: "TTN is required"}))
    }

    const handleSubmit = () => {
        const unhendledErrors = handleUnhendledErrors(formState)

        if (Object.values(unhendledErrors).length === 0) {
            submitAction(formState)
        }
        else {
            setErrors({...errors, ...unhendledErrors})
        }
    }

    // *** View ***

    const errorMessageSpawner = error => {
        if (error) {
            return (
                <small style={{color: "red", marginTop: "5px"}}>{error}</small>
            )
        }
    }

    console.log(carrierList);
    

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
                    <ValidatorForm onSubmit={handleSubmit}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Box my={1.5}>
                                    <TextValidator
                                        fullWidth
                                        value={formState.ttnNumber || ''}
                                        id="ttnNumber"
                                        label="TTN number"
                                        name="ttnNumber"
                                        autoComplete="ttnNumber"
                                        onChange={handleChange}
                                        validators={['required', 'matchRegexp:[0-9]$']}
                                        errorMessages={['This field is required', 'The value must contain only numbers']}
                                        
                                    />
                                </Box>
                                {errorMessageSpawner(errors.numberError)}
                            </Grid>
                            <Button
                                type="button"
                                variant="outlined"
                                color="primary"
                                onClick={handleTtnFetch}
                                id="fetchtTTNButton"
                            >
                                Fetch TTN data
                            </Button>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <Box my={1.5}>
                                    <TextValidator
                                        disabled
                                        value={formState.ttnDate}
                                        fullWidth
                                        id="ttnDate"
                                        label="TTN discharge date"
                                        name="ttnDate"
                                        autoComplete="ttnDate"
                                        onChange={handleChange}
                                        validators={['required']}
                                        errorMessages={['This field is required']}
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
                                            required
                                            value={formState.sender}
                                            onChange={handleChange}
                                            input={<Input name="sender" id="age-helper" />}
                                            name="sender"
                                            autoComplete="ttnNumber"
                                            className="senderListSelect"
                                            error={errors.senderErr && true}
                                        >
                                            {
                                                senderList.length > 0
                                                ? (
                                                    senderList
                                                    .map(sender => (
                                                        <MenuItem 
                                                            key={sender.id} 
                                                            value={sender.name}
                                                            >
                                                                {sender.name}
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
                                        {errorMessageSpawner(errors.senderErr)}
                                    </FormControl>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <Box my={1.5}>
                                    <FormControl fullWidth>
                                        <InputLabel htmlFor="age-helper">Transporter*</InputLabel>
                                        <Select
                                            required
                                            value={formState.transporter}
                                            onChange={handleChange}
                                            input={<Input name="transporter" />}
                                            name="transporter"
                                            error={errors.transporterErr && true}
                                            className="transporterSelect"
                                        >
                                            {
                                                carrierList.length > 0
                                                ? (
                                                    carrierList
                                                    .map(carier => (
                                                        <MenuItem 
                                                            key={carier.id} 
                                                            value={carier.name}>
                                                                {carier.name}
                                                        </MenuItem>
                                                    ))
                                                ) 
                                                : (
                                                    <MenuItem value="">
                                                        <em>Carriers not found</em>
                                                    </MenuItem>
                                                )
                                            }
                                        </Select>
                                        {errorMessageSpawner(errors.transporterErr)}
                                    </FormControl>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <Box my={1.5}>
                                    <TextValidator
                                        fullWidth
                                        value={formState.transportNumber}
                                        id="ttnNumber"
                                        label="Transport number"
                                        name="transportNumber"
                                        autoComplete="ttnNumber"
                                        onChange={handleChange}
                                        validators={['required', 'matchRegexp:[0-9]$']}
                                        errorMessages={['This field is required', 'The value must contain only numbers']}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <Box my={0}>
                                    <TextField
                                        value={formState.consignmentDescription}
                                        id="outlined-multiline-static"
                                        label="Description of the consignment"
                                        multiline
                                        rows="5"
                                        margin="normal"
                                        variant="outlined"
                                        fullWidth
                                        onChange={handleChange}
                                        name="consignmentDescription"
                                        error={errors.consignmentDescriptionErr && true}
                                    />
                                </Box>
                                {errorMessageSpawner(errors.consignmentDescriptionErr)}
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <Box my={1}>
                                    <TextValidator
                                        disabled
                                        value={formState.goodsAmount}
                                        fullWidth
                                        id="goodsAmount"
                                        label="The amount of goods on TTN"
                                        name="goodsAmount"
                                        autoComplete="goodsAmount"
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
                                        disabled
                                        value={formState.goodsTypesAmount}
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
                                        disabled
                                        value={formState.registerDate}
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
                                        value={formState.consignmentLabeling}
                                        id="outlined-multiline-static"
                                        label="Description and labeling of the consignment"
                                        multiline
                                        rows="10"
                                        margin="normal"
                                        variant="outlined"
                                        fullWidth
                                        onChange={handleChange}
                                        name="consignmentLabeling"
                                        error={errors.consignmentLabelingErr && true}
                                    />
                                </Box>
                                {errorMessageSpawner(errors.consignmentLabelingErr)}
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

// This validation staff below needed because Select and TextField components
// in React Material UI is implemented without any validation properties ...

const handleUnhendledErrors = (formState) => {
    const {sender, transporter, consignmentDescription, consignmentLabeling } = formState
    
    let unhendledErrors = {}
    const requiredMessage = "This field is required"

    // Selects validation
    if (!sender) {
        unhendledErrors = Object.assign({}, unhendledErrors, {senderErr: requiredMessage})
    }

    if(!transporter) {
        unhendledErrors = Object.assign({}, unhendledErrors, {transporterErr: requiredMessage})
    }

    // TextFields validation
    if(!consignmentDescription) {
        unhendledErrors = Object.assign({}, unhendledErrors, {consignmentDescriptionErr: requiredMessage})
    }

    if(!consignmentLabeling) {
        unhendledErrors = Object.assign({}, unhendledErrors, {consignmentLabelingErr: requiredMessage})
    }

    return unhendledErrors
}