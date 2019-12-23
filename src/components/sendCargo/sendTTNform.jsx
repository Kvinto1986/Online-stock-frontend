import React, {Fragment, useState} from 'react'
import Typography from '@material-ui/core/Typography'
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator'
import Grid from '@material-ui/core/Grid'
import useStyles from '../operatorPage/operatorPageStyles'
import Button from '@material-ui/core/Button'

import InputText from '../fields/textField'
import CargoTable from './cargoTable'
import {TextField} from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'

export default ({ttnNumber, carrier, driver, onSubmit, error, authUser, order}) => {
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
        amount: '',
    })

    const [cargo, setCargo] = useState([])
    const [idError, setIdError] = useState('')


    const handleAddProduct = () => {
        const serviceIdArr = cargo.map(elem => elem.id)

        if (serviceIdArr.includes(product.id)) {
            setIdError('Product serial numbers cannot match !')
        } else {
            setCargo([...cargo, product])
            setIdError('')
        }
    }

    const handleDeleteProduct = index => {
        const array = [...cargo]
        array.splice(index, 1)
        setCargo(array)
    }

    const handleSubmit = () => {
        if (order) {
            TTN.products = order.cargo
        } else {
            TTN.products = cargo
        }

        const {number, carrier, carNumber, driver, warehouseCompany, owner, products, registrar} = TTN

        onSubmit({number, carrier, carNumber, driver, warehouseCompany, owner, products, registrar})
    }

    const classes = useStyles()

    return (
        <Box mt={3} mb={3}>
            <Container component="main" maxWidth="xl">
                <CssBaseline/>
                <Paper>
                    <Box display="flex" justifyContent="center" mt={5}>
                        <Typography variant="h5" component="h5">
                            International waybill № {TTN.number}
                        </Typography>
                    </Box>
                    <Container>
                        <ValidatorForm onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xl={4} xs={12}>
                                    <InputText
                                        min={10}
                                        max={15}
                                        pattern={/^[1-9]*$/}
                                        fullWidth
                                        label="TTN number"
                                        required
                                        name="number"
                                        error={error}
                                        disabled={order}
                                        value={TTN}
                                        handleChange={setTTN}
                                        helperClass={classes.error}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={3}>
                                <Grid item sm={4} xs={12}>
                                    <TextField
                                        disabled
                                        fullWidth
                                        label="UNP №"
                                        value={TTN.carrier.unp}
                                    />
                                </Grid>
                                <Grid item sm={4} xs={12}>
                                    <TextField
                                        disabled
                                        fullWidth
                                        label="Phone number"
                                        value={TTN.carrier.tel}
                                    />
                                </Grid>
                                <Grid item sm={4} xs={12}>
                                    <TextField
                                        disabled
                                        fullWidth
                                        label="Company name"
                                        value={TTN.carrier.company}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={3}>
                                <Grid item sm={6} xs={12}>
                                    <TextField
                                        fullWidth
                                        disabled
                                        label="Driver Name"
                                        value={TTN.driver.name}
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <TextField
                                        fullWidth
                                        disabled
                                        label="Driver license"
                                        value={TTN.driver.license}
                                    />
                                </Grid>
                                <Grid item xl={12} xs={12}>
                                    {order ? (<TextValidator
                                        fullWidth
                                        disabled={true}
                                        label="Number of the car"
                                        value={`${order.carNumber}`}
                                    />) : <InputText
                                        min={6}
                                        max={10}
                                        pattern={/.*/}
                                        fullWidth
                                        label="Number of the car"
                                        required
                                        name="carNumber"
                                        error={error}
                                        value={TTN}
                                        handleChange={setTTN}
                                        helperClass={classes.error}
                                    />}
                                </Grid>
                            </Grid>
                            {!order && (
                                <Fragment>
                                    <Box display="flex" justifyContent="center">
                                        <Typography variant="h5" component="h5" mt={5} >
                                            Add product to cargo:
                                        </Typography>
                                    </Box>

                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
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
                                        <Grid item xs={12}>
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
                                        <Grid item xs={12}>
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
                                        <Grid item xs={12}>
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
                                        <Grid item xl={4}>
                                            <Box mb={10}>
                                                <Button 
                                                    variant="contained" 
                                                    type="button"
                                                    onClick={handleAddProduct}
                                                    disabled={order}
                                                    size="small"
                                                >
                                                    Add to current cargo list
                                                </Button>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        <Grid item xl={2} xs={12}>
                                            <span style={{color:'red'}}>{idError}</span>
                                        </Grid>
                                    </Grid>
                                </Fragment>
                            )}
                            {order || cargo.length > 0 ? (
                                <Fragment>
                                    <Grid container spacing={3}>
                                        <Grid item xl={10} xs={12}>
                                            {order ? (
                                                <CargoTable
                                                    cargoList={Object.values(order.cargo)}
                                                    handleDeleteProduct={handleDeleteProduct}
                                                    offButton={true}
                                                />
                                            ) : <CargoTable
                                                cargoList={cargo}
                                                handleDeleteProduct={handleDeleteProduct}
                                                offButton={false}
                                            />}
                                        </Grid>
                                    </Grid>
                                </Fragment>
                            ) : null}
                            <Grid container spacing={3}>
                                <span className={classes.error}>{error.error}</span>
                            </Grid>
                                <Grid container>
                                    <Grid item xl={3} xs={12}>
                                        <Box mb={3}>
                                            <Button variant="contained" color="primary" type="submit" size="large">
                                                Submit
                                            </Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                        </ValidatorForm>
                    </Container>
                </Paper>
            </Container> 
        </Box>
    )
}