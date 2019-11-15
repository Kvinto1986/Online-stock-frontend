import React, {Fragment, useState} from 'react'
import Typography from '@material-ui/core/Typography'
import {ValidatorForm} from 'react-material-ui-form-validator'
import Grid from '@material-ui/core/Grid'
import useStyles from '../operatorPage/operatorPageStyles'
import Button from '@material-ui/core/Button'

import InputText from '../fields/textField'
import CargoTable from './cargoTable'
import {TextField} from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'

export default ({ttnNumber, carrier, driver, onSubmit, error, authUser, orders}) => {
    const [TTN, setTTN] = useState({
        number: ttnNumber,
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
            email: authUser.email
        },
        carNumber: '',
        warehouseCompany: authUser.company,
        owner: '',
    })

    const [product, setProduct] = useState({
        id: '',
        ttnNumber: '',
        name: '',
        amount: 0,
    })

    const [cargo, setCargo] = useState([])


    const handleAddProduct = () => setCargo([...cargo, product])

    const handleDeleteProduct = index => {
        const array = [...cargo]
        array.splice(index, 1)
        setCargo(array)
    }

    const handleSubmit = () => {
        if (orders[TTN.number]) {
            TTN.products = orders[TTN.number].cargo
        } else TTN.products = cargo

        const {number, carrier, carNumber, driver, warehouseCompany, owner, products, registrar} = TTN
        onSubmit({number, carrier, carNumber, driver, warehouseCompany, owner, products, registrar})

    }

    const classes = useStyles()
    return <Container component="main" maxWidth="xl">
        <CssBaseline/>
        <Paper style={{marginTop: '7%'}}>
            <ValidatorForm onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xl={4} xs={1}>
                    </Grid>
                    <Grid item xl={4} xs={10}>
                        <InputText
                            min={10}
                            max={15}
                            pattern={/^[1-9]*$/}
                            fullWidth
                            label="TTN number"
                            required
                            name="number"
                            error={error}
                            disabled={orders[TTN.number]}
                            value={TTN}
                            handleChange={setTTN}
                            helperClass={classes.error}
                        />
                    </Grid>
                    <Grid item xl={4} xs={1}>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xl={1} xs={1}>
                    </Grid>
                    <Grid item xl={7} xs={10}>
                        <TextField
                            disabled
                            fullWidth
                            label="Owner information"
                            value={`UNP №  ${TTN.carrier.unp}, phone number:  ${TTN.carrier.tel}, company name: ${TTN.carrier.company}`}
                        />
                    </Grid>

                    <Grid item xl={3} xs={10}>
                        <TextField
                            fullWidth
                            disabled
                            label="Company recipient"
                            value={TTN.warehouseCompany}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xl={1} xs={1}>
                    </Grid>
                    <Grid item xl={7} xs={10}>
                        <TextField
                            fullWidth
                            disabled
                            label="Driver info"
                            value={`Name: ${TTN.driver.name}, driver license № ${TTN.driver.license}`}
                        />
                    </Grid>
                    <Grid item xl={3} xs={10}>
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

                {!orders[TTN.number] && (
                    <Fragment>
                        <Grid container>
                            <Grid item xl={1} xs={1}>
                            </Grid>
                            <Typography component="h1" variant="h5">
                                Add product to cargo:
                            </Typography>
                        </Grid>

                        <Grid container spacing={3}>
                            <Grid item xl={1} xs={1}>
                            </Grid>
                            <Grid item xl={2} xs={10}>
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
                            <Grid item xl={2} xs={10}>
                                <InputText
                                    min={2}
                                    max={30}
                                    pattern={/.*/}
                                    fullWidth
                                    label="Serial number"
                                    required
                                    name="id"
                                    error={error}
                                    value={product}
                                    handleChange={setProduct}
                                    helperClass={classes.error}
                                />
                            </Grid>
                            <Grid item xl={3} xs={10}>
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
                            <Grid item xl={1} xs={10}>
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
                            <Grid item xl={3} xs={10}>
                                <Button variant="contained" color="primary" type="button"
                                        style={{marginLeft: '5%'}}
                                        onClick={handleAddProduct}
                                        disabled={orders[TTN.number]}>
                                    Add to current cargo list
                                </Button>
                            </Grid>
                        </Grid>
                    </Fragment>
                )}

                {orders[TTN.number] || cargo.length > 0 ? (
                    <Fragment>
                        <Grid container spacing={3}>
                            <Grid item xl={1} xs={1}>
                            </Grid>
                            <Typography component="h1" variant="h5" style={{marginLeft: '1%'}}>
                                Cargo table:
                            </Typography>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xl={1} xs={1}>
                            </Grid>
                            <Grid item xl={10} xs={10}>
                                {orders[TTN.number] ? (
                                    <CargoTable
                                        cargoList={Object.values(orders[TTN.number].cargo)}
                                        handleDeleteProduct={handleDeleteProduct}
                                        offButton={true}
                                    />
                                ) : <CargoTable
                                    cargoList={cargo}
                                    handleDeleteProduct={handleDeleteProduct}
                                    offButton={false}
                                />}

                            </Grid>
                            <Grid item xl={1} xs={1}>
                            </Grid>
                        </Grid>
                    </Fragment>) : null}
                <Grid container spacing={3}>
                    <Grid item xl={1} xs={1}>
                    </Grid>
                    <span className={classes.error}>{error.error}</span>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xl={1} xs={1}>
                    </Grid>
                    <Grid item xl={3} xs={10}>
                        <Button variant="contained" color="primary" type="submit">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </ValidatorForm>
        </Paper>
    </Container>
}