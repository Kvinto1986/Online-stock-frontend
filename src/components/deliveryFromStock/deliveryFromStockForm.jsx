import React, { useState, useEffect } from 'react'
import Typography from "@material-ui/core/Typography";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
// import {registerDelivery} from "../../servies/registerDelivery";
import {
    Grid, Button, Input, Select, Box, 
    TextField, InputLabel, MenuItem, FormControl,
} from '@material-ui/core';

const DeliveryFromStockForm = ({ senderList, carrierList }) => {

    // *** Constants ***

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
        managerName: '',
        registerDate: '',
        consignmentLabeling: '',
    }

    const [formState, setFormState] = useState(initialState);

    // *** Functions ***

    const handleChange = e => {
        setFormState({...formState, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        console.log(formState);
        
        // registerDelivery(formState)
    }

    const reset = () => {
        setFormState(initialState)
    }

    // *** View ***

    return (
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
                                required
                                fullWidth
                                id="ttnNumber"
                                label="TTN number"
                                name="ttnNumber"
                                autoComplete="ttnNumber"
                                onChange={handleChange}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <Box my={1.5}>
                            <TextValidator
                                required
                                fullWidth
                                id="ttnDate"
                                label="TTN date"
                                name="ttnNumber"
                                autoComplete="ttnNumber"
                                disabled
                                onChange={handleChange}
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
                                            <MenuItem value="">
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
                                <Select
                                    required
                                    value={formState.transporter}
                                    onChange={handleChange}
                                    input={<Input name="transporter" id="age-helper" />}
                                    name="transporter"
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
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <Box my={1.5}>
                            <TextValidator
                                required
                                fullWidth
                                id="ttnNumber"
                                label="Transport number"
                                name="transportNumber"
                                autoComplete="ttnNumber"
                                onChange={handleChange}
                            />
                        </Box>
                    </Grid>
                </Grid>
                {/* ========== If transport type is a car =========== */}
                <Grid container>
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
                            />
                        </Box>
                    </Grid>
                </Grid>
                {/* ==========****************************=========== */}
                <Grid container>
                    <Grid item xs={12}>
                        <Box my={0}>
                            <TextField
                                required
                                id="outlined-multiline-static"
                                label="Description of the consignment"
                                multiline
                                rows="5"
                                margin="normal"
                                variant="outlined"
                                fullWidth
                                onChange={handleChange}
                                name="consignmentDescription"
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <Box my={1}>
                            <TextValidator
                                required
                                fullWidth
                                id="ttnNumber"
                                label="The amount of goods on TTN"
                                name="goodsAmount"
                                autoComplete="ttnNumber"
                                onChange={handleChange}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} >
                        <Box my={1.5}>
                            <TextValidator
                                required
                                fullWidth
                                id="ttnNumber"
                                label="The number of good's types on TTN"
                                name="goodsTypesAmount"
                                autoComplete="ttnNumber"
                                onChange={handleChange}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} >
                        <Box my={1.5}>
                            <TextValidator
                                required
                                fullWidth
                                id="ttnNumber"
                                label="Manager name"
                                name="managerName"
                                autoComplete="ttnNumber"
                                onChange={handleChange}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} >
                        <Box my={1.5}>
                            <TextValidator
                                required
                                fullWidth
                                id="ttnNumber"
                                label="Registration date and time  of TTN"
                                name="registerDate"
                                autoComplete="ttnNumber"
                                onChange={handleChange}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <Box my={1}>
                            <TextField
                                required
                                id="outlined-multiline-static"
                                label="Description and labeling of the consignment"
                                multiline
                                rows="10"
                                margin="normal"
                                variant="outlined"
                                fullWidth
                                onChange={handleChange}
                                name="consignmentLabeling"
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
    )
}

export default DeliveryFromStockForm