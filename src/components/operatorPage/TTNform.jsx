import React, {Fragment, useState} from 'react'
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
import SelectCustom from 'react-select';
import InputText from '../fields/textField'
import CargoTable from './cargoTable'
import Autocomplete from '../fields/autocomplete'
import Paper from '@material-ui/core/Paper'
import FormHelperText from '@material-ui/core/FormHelperText'

const options = [
    { value: 'BLR', label: 'BLR' },
    { value: 'RUS', label: 'RUS' },
    { value: 'PL', label: 'PL' },
]

export default ({ttnNumber, onSubmit, error, authUser, carrier, driver, services, order}) => {

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
    const [cargo, setCargo] = useState([])
    const [service, setService] = useState('')
    const [idError, setIdError] = useState('')
    const [carNumber, setCarNumber] = useState({ value: "BLR", label: "BLR" })
    const [patternErr, setPatternError ] = useState(false)

    const [product, setProduct] = useState({
        package: '',
        amount: '',
        name: '',
        id: '',
    })

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
        console.log(error)
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
          <Paper className={classes.root}>
              <Typography variant="h4" component="h4" color="textSecondary"
                          style={{width: '100%', textAlign: 'center', marginTop: '2%'}}>
                  International waybill №{TTN.number}
              </Typography>
              <ValidatorForm className={classes.TTNform} onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                      <Grid item xl={4} xs={1}>
                      </Grid>
                      <Grid item xl={4} xs={10}>
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
                      <Grid item xl={4} xs={1}>
                      </Grid>
                  </Grid>
                  <Grid container spacing={3}>
                      <Grid item xl={1} xs={1}>
                      </Grid>
                      <Grid item xl={4} xs={10}>
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
                      <Grid item xl={1} xs={1}>
                      </Grid>
                      <Grid item xl={5} xs={10}>
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
                      <Grid item xl={1} xs={1}>
                      </Grid>
                  </Grid>

                  <Grid container spacing={3}>
                      <Grid item xl={1} xs={1}>
                      </Grid>
                      <Grid item xl={10} xs={10}>
                          <TextValidator
                            style={{marginTop: '3%'}}
                            fullWidth
                            disabled={true}
                            value={`UNP №  ${TTN.carrier.unp}, phone number:  ${TTN.carrier.tel}, company name: ${TTN.carrier.company}`}
                            label="Carrier information"
                          />
                      </Grid>
                  </Grid>

                  <Grid container spacing={3} style={{marginTop: '3%'}}>
                      <Grid item xl={1} xs={1}>
                      </Grid>
                      <Grid item xl={4} xs={10}>
                          <TextValidator
                            fullWidth
                            disabled={true}
                            label="Driver information"
                            value={`Name: ${TTN.driver.name}, driver license № ${TTN.driver.license}`}
                          />
                      </Grid>
                      <Grid item xl={3} xs={10}>
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
                      <Grid item xl={3} xs={10}>
                          <TextValidator
                            fullWidth
                            disabled={true}
                            value={TTN.warehouseCompany}
                            label="Warehouse company"
                          />
                      </Grid>
                  </Grid>
                  {!order && (
                    <Fragment>
                        <Grid container spacing={3}>
                            <Grid item xl={12} style={{marginTop: '3%', marginBottom: '1%'}}>
                                <Typography component="h1" variant="h5" style={{textAlign: 'center'}}>
                                    Add product to cargo:
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xl={1} xs={1}>
                            </Grid>
                            <Grid item xl={2} xs={10}>
                                <InputText
                                  min={10}
                                  max={10}
                                  pattern={/^[0-9]*$/}
                                  fullWidth
                                  label="serial number"
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
                                  label="name"
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
                                  label="amount"
                                  required
                                  name="amount"
                                  error={error}
                                  value={product}
                                  handleChange={setProduct}
                                  helperClass={classes.error}
                                />
                            </Grid>
                            <Grid item xl={2} xs={10}>
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
                                        <MenuItem value={'box'}>box</MenuItem>
                                        <MenuItem value={'without packaging'}>without packaging</MenuItem>
                                        <MenuItem value={'container'}>container</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xl={3}>
                                <Button variant="contained" color="primary" style={{marginTop: '5%',}} type="button"
                                        onClick={handleAddProduct}>
                                    Add to current cargo list
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xl={1} xs={1}>
                            </Grid>
                            <Grid item xl={2} xs={10}>
                                <span style={{color: 'red'}}>{idError}</span>
                            </Grid>
                        </Grid>
                    </Fragment>
                  )}


                  {order || cargo.length > 0 ? (
                    <Fragment>
                        <Grid container>
                            <Grid item xl={1}>
                            </Grid>
                            <Grid item xl={10} xs={10}>
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
                            <Grid item xl={1} xs={1}>
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid item xl={1} xs={1}>
                            </Grid>
                            <Grid item xl={10}>
                                <Button variant="contained" color="primary" type="submit"
                                        style={{marginTop: '4%'}}>
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Fragment>) : null}

              </ValidatorForm>
          </Paper>
      </Container>
    )
}
