import React, {useEffect, useState} from 'react'
import Typography from '@material-ui/core/Typography'
import {ValidatorForm} from 'react-material-ui-form-validator'
import Grid from '@material-ui/core/Grid'
import useStyles from '../operatorPage/operatorPageStyles'
import Button from '@material-ui/core/Button'

import InputText from '../fields/textField'
import CargoTable from './cargoTable'
import {TextField} from '@material-ui/core'
import Box from '@material-ui/core/Box'
import * as Swal from 'sweetalert2'

export default ({onSubmit, error, authUser, carrier, driver}) => {
    useEffect(() => {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: error.error
        })
    }, [error])

    const [TTN, setTTN] = useState({
        number: '',
        carrier: {
            unp: carrier.id,
            tel: carrier.tel,
            company: carrier.company
        },
        driver: {
            name: `${driver.name} ${driver.surname}`,
            license: driver.id
        },
        registrar: {
            name: `${authUser.firstName} ${authUser.patronymic} ${authUser.lastName}`,
            id: authUser.id
        },
        carNumber: '',
        warehouseCompany: authUser.company,
        owner: '',
    })

    const [product, setProduct] = useState({
        ttnNumber: '',
        name: '',
        amount: '',
    })

    const [cargo, setCargo] = useState([])


    const handleAddProduct = () => setCargo([...cargo, product])

    const handleDeleteProduct = index => {
        const array = [...cargo]
        array.splice(index, 1)
        setCargo(array)
    }

    const handleSubmit = () => {
        const {number, carrier, carNumber, driver, warehouseCompany, owner} = TTN
        onSubmit({
            number,
            carrier,
            carNumber,
            driver,
            warehouseCompany,
            owner,
            products: cargo
        })
    }

    const classes = useStyles()

    return <ValidatorForm onSubmit={handleSubmit}>
        <Box component={Grid} container spacing={3} p={5}>
            <Grid container>
                <InputText
                    min={10}
                    max={15}
                    pattern={/^[1-9]*$/}
                    fullWidth
                    label="TTN number"
                    required
                    name="number"
                    error={error}
                    value={TTN}
                    handleChange={setTTN}
                    helperClass={classes.error}
                />
            </Grid>
            <Grid container spacing={3}>
                <Grid item md={8}>
                    <TextField
                        disabled
                        fullWidth
                        label="Owner information"
                        value={`UNP №  ${TTN.carrier.unp}, phone number:  ${TTN.carrier.tel}, company name: ${TTN.carrier.company}`}
                    />
                </Grid>
                <Grid item md={4}>
                    <TextField
                        fullWidth
                        disabled
                        label="Company recipient"
                        value={TTN.warehouseCompany}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item md={8}>
                    <TextField
                        fullWidth
                        disabled
                        label="Driver info"
                        value={`Name: ${TTN.driver.name}, driver license № ${TTN.driver.license}`}
                    />
                </Grid>
                <Grid item md={4}>
                    <InputText
                        min={6}
                        max={10}
                        pattern={/.*/}
                        fullWidth
                        label="Car number"
                        required
                        name="carNumber"
                        error={error}
                        value={TTN}
                        handleChange={setTTN}
                        helperClass={classes.error}
                    />
                </Grid>
            </Grid>
            <Box component={Grid} container spacing={3} p={2}>
                <Grid container>
                    <Typography component="h1" variant="h5">
                        Add product to cargo:
                    </Typography>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item md={4}>
                        <InputText
                            min={2}
                            max={30}
                            pattern={/.*/}
                            fullWidth
                            label="From TTN"
                            required
                            name="ttnNumber"
                            error={error}
                            value={product}
                            handleChange={setProduct}
                            helperClass={classes.error}
                        />
                    </Grid>
                    <Grid item md={3}>
                        <InputText
                            min={2}
                            max={30}
                            pattern={/.*/}
                            fullWidth
                            label="Product type"
                            required
                            name="name"
                            error={error}
                            value={product}
                            handleChange={setProduct}
                            helperClass={classes.error}
                        />
                    </Grid>
                    <Grid item md={2}>
                        <InputText
                            min={1}
                            max={7}
                            pattern={/^[0-9]*$/}
                            fullWidth
                            label="Amount"
                            required
                            name="amount"
                            error={error}
                            value={product}
                            handleChange={setProduct}
                            helperClass={classes.error}
                        />
                    </Grid>
                    <Grid item md={3}>
                        <Button variant="contained" color="primary" type="button"
                                onClick={handleAddProduct}>
                            Add to current cargo list
                        </Button>
                    </Grid>
                </Grid>
                <Grid container>
                    <Typography component="h1" variant="h5">
                        Cargo table:
                    </Typography>
                </Grid>
                <Grid container>
                    <CargoTable
                        cargoList={cargo}
                        handleDeleteProduct={handleDeleteProduct}
                    />
                </Grid>
                {cargo.length > 0 &&
                (<Grid container>
                    <Button variant="contained" color="primary" type="submit">
                        Submit
                    </Button>
                </Grid>)}
            </Box>
        </Box>
    </ValidatorForm>
}
