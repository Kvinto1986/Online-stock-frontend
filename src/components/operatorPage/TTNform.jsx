import React, {useState} from 'react'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator'
import Grid from '@material-ui/core/Grid'
import useStyles from './operatorPageStyles'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import SelectCustom from 'react-select'
import InputText from '../fields/textField'
import CargoTable from './cargoTable'
import Autocomplete from '../fields/autocomplete'
import Paper from '@material-ui/core/Paper'
import FormHelperText from '@material-ui/core/FormHelperText'
import Box from '@material-ui/core/Box'

const options = [
    { value: 'BLR', label: 'BLR' },
    { value: 'RUS', label: 'RUS' },
    { value: 'PL', label: 'PL' },
]

const initialProdictState = {
    package: '',
    amount: '',
    name: '',
    id: '',
}

export default ({ttnNumber, onSubmit, error, authUser, carrier, driver, services, order}) => {
    const [cargo, setCargo] = useState([])
    const [service, setService] = useState('')
    const [idError, setIdError] = useState('')
    const [carNumber, setCarNumber] = useState({ value: 'BLR', label: 'BLR' })
    const [patternErr, setPatternError ] = useState(false)
    const [product, setProduct] = useState(initialProdictState)
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

    const countryExpl = {
        BLR: {
            value: '3434AT-1',
            pattern: /\d{4}\D{2}\-\d{1}/
        },
        RUS: {
            value: 'C065MK78',
            pattern: /\D{1}\d{3}\D{2}\d{2}/
        },
        PL: {
            value: 'SO9777G',
            pattern: /\D{2}\d{4}\D{1}/
        }
    }

    const handleChangeProduct = (e) => {
        setProduct({...product, [e.target.name]: e.target.value})
    }

    const handleAddProduct = () => {

        const serviceIdArr = cargo.map(elem => elem.id)

        if (serviceIdArr.includes(product.id)) {
            setIdError('Product serial numbers cannot match !')
        } else {
            setCargo([...cargo, product])
            setIdError('')
        }
    }

    const handleDeleteProduct = (index) => {
        const array = [...cargo]
        array.splice(index, 1)
        setCargo([...array])
    }

   const  handleChange = selectedOption => {
        setCarNumber( selectedOption)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {...TTN}
        if (order) {
            data.products = order.cargo
        } else {
            data.products = cargo
        }
        data.service = service
        if(!countryExpl[carNumber.value].pattern.test(data.carNumber)) {
            setPatternError(true)
            return false
        } else {
            setPatternError(false)
        }
        onSubmit(data)
    }

    const classes = useStyles()
    const servicesArray = Object.keys(services)

    return (
      <Container component="main" maxWidth="xl">
          <CssBaseline/>
          <Box mt={5} mb={5}>
            <Paper className={classes.root}>
                <Typography
                    variant="h4"
                    component="h4"
                    className={classes.ttnTitle}
                >
                    International waybill №{TTN.number}
                </Typography>
                <ValidatorForm className={classes.TTNform} onSubmit={handleSubmit}>
                    <Container fixed>
                        <Grid container spacing={3}>
                            <Grid item sm={4} xs={12}>
                                <InputText
                                    min={10}
                                    max={10}
                                    pattern={/^[0-9]*$/}
                                    fullWidth
                                    label="TTN number"
                                    required
                                    disabled={order}
                                    name="number"
                                    error={error}
                                    value={TTN}
                                    handleChange={setTTN}
                                    helperClass={classes.error}
                                />
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                {order ? (
                                    <TextValidator
                                    fullWidth
                                    disabled={true}
                                    value={`${order.service}`}
                                    label="Service name"
                                    />
                                ) : <Autocomplete
                                    list={servicesArray}
                                    searchItem="services"
                                    setValue={setService}
                                />}
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                {order ? (
                                    <TextValidator
                                    fullWidth
                                    disabled={true}
                                    value={`${order.ownerInfo}`}
                                    label="Owner information"
                                    />
                                ) : <InputText
                                    min={2}
                                    max={30}
                                    pattern={/.*/}
                                    fullWidth
                                    label="Owner information"
                                    required
                                    name="owner"
                                    error={error}
                                    value={TTN}
                                    handleChange={setTTN}
                                    helperClass={classes.error}
                                />}
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item sm={4} xs={12}>
                                <TextValidator
                                    fullWidth
                                    disabled={true}
                                    label="Carrier UNP"
                                    value={TTN.carrier.unp}
                                />
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <TextValidator
                                    fullWidth
                                    disabled={true}
                                    label="Phone number"
                                    value={TTN.carrier.tel}
                                />
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <TextValidator
                                    fullWidth
                                    disabled={true}
                                    label="Company Name"
                                    value={TTN.carrier.company}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item sm={2} xs={12}>
                                <TextValidator
                                    fullWidth
                                    disabled={true}
                                    label="Driver Name"
                                    value={TTN.driver.name}
                                />
                            </Grid>
                            <Grid item sm={2} xs={12}>
                                <TextValidator
                                    fullWidth
                                    disabled={true}
                                    label="Driver license"
                                    value={TTN.driver.license}
                                />
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                {order ? (<TextValidator
                                    fullWidth
                                    disabled={true}
                                    label="Number of the car"
                                    value={`${order.carNumber}`}
                                />) : <div className={classes.carNumber}>
                                    <SelectCustom
                                        className={classes.carSelect}
                                        onChange={handleChange}
                                        value={carNumber}
                                        options={options}
                                    />
                                    <div className={classes.wrapper}>
                                        <InputText
                                            max={countryExpl[carNumber.value].value.length}
                                            className={classes.numberInpt}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            pattern={/.*/}
                                            placeholder={countryExpl[carNumber.value].value}
                                            fullWidth
                                            label="Number of the car"
                                            required
                                            name="carNumber"
                                            error={error}
                                            value={TTN}
                                            handleChange={setTTN}
                                            helperClass={classes.error}
                                        />
                                        {patternErr && (<FormHelperText className={classes.error}>check pattern</FormHelperText>)}
                                    </div>
                                </div>}
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <TextValidator
                                    fullWidth
                                    disabled={true}
                                    value={TTN.warehouseCompany}
                                    label="Warehouse company"
                                />
                            </Grid>
                        </Grid>
                        {!order && (
                            <Container maxWidth="xl">
                                <Box display="flex" justifyContent="center" mt={10} >
                                    <Typography component="h4" variant="h4">
                                        Add product to cargo:
                                    </Typography>
                                </Box>
                                <InputText
                                min={10}
                                max={10}
                                pattern={/^[0-9]*$/}
                                fullWidth
                                label="Serial number"
                                required
                                name="id"
                                error={error}
                                value={product}
                                handleChange={setProduct}
                                helperClass={classes.error}
                                />
                                <InputText
                                min={2}
                                max={30}
                                pattern={/.*/}
                                fullWidth
                                label="Name"
                                required
                                name="name"
                                error={error}
                                value={product}
                                handleChange={setProduct}
                                helperClass={classes.error}
                                />
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
                                <FormControl className={classes.formControl}>
                                    <InputLabel>
                                        Type of packaging
                                    </InputLabel>
                                    <Select
                                        required
                                        onChange={handleChangeProduct}
                                        value={product.package}
                                        inputProps={{
                                            name: 'package',
                                        }}
                                    >
                                        <MenuItem value={'box'}>Box</MenuItem>
                                        <MenuItem value={'without packaging'}>Without packaging</MenuItem>
                                        <MenuItem value={'container'}>Container</MenuItem>
                                    </Select>
                                </FormControl>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="button"
                                    onClick={handleAddProduct}
                                >
                                    Add to current cargo list
                                </Button>
                                <Grid container style={{marginTop:'1%'}}>
                                    <Grid item xs={12}>
                                        <span style={{color: 'red'}}>{idError}</span>
                                    </Grid>
                                </Grid>
                            </Container>
                        )}
                        {(order || cargo.length > 0) && (
                            <Container maxWidth="xl">
                                <Box mt={5}>
                                    <Grid container>
                                        <Grid item xs={12}>
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
                                </Box>
                            </Container>
                        )}
                    </Container>
                </ValidatorForm>
            </Paper>
          </Box>
      </Container>
    )
}
