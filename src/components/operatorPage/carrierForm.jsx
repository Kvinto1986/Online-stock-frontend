import React, {useState} from 'react'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import useStyles from '../carrierForm/addCarrierStyles'
import {addCarrier} from '../../servies/carrierServies'
import SearchIcon from '@material-ui/icons/Search'
import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/dist/style.css'

export default (props) => {
    const [carrier, setCarrier] = useState({
        passport: '',
        email: '',
        tel: '',
        country: '',
        company: ''
    })
    const [phone, setPhone] = useState('')
    const handleInputChange = (e) => {
        setCarrier({...carrier, [e.target.name]: e.target.value})
    }

    function handleOnChange(value) {
        setPhone(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const carrierInfo = {
            carrier: carrier,
        }
        addCarrier(carrierInfo)
            .then((res) => {
                props.history.push(props.prevPath)
            })
    }

    const classes = useStyles()

    return (
        <React.Fragment>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <SearchIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Add Carrier
                    </Typography>
                    <ValidatorForm className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextValidator
                                    type='number'
                                    className='noNumerical'
                                    variant="outlined"
                                    fullWidth
                                    id="company_passport"
                                    label="Passport number"
                                    name="passport"
                                    autoComplete="passport"
                                    value={carrier.passport}
                                    validators={['minNumber:0', 'required']}
                                    errorMessages={['Passport number will be positive', 'This field is required']}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextValidator
                                    variant="outlined"
                                    fullWidth
                                    id="company_email"
                                    label="Email"
                                    name="email"
                                    autoComplete="email"
                                    value={carrier.email}
                                    validators={['required', 'isEmail']}
                                    errorMessages={['This field is required', 'email is not valid']}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <ReactPhoneInput
                                    inputClass={classes.tel}
                                    buttonClass={classes.drop}
                                    defaultCountry={'by'}
                                    value={carrier.tel}
                                    inputExtraProps={{
                                        name: 'tel',
                                        onChange: handleInputChange
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextValidator
                                    variant="outlined"
                                    fullWidth
                                    id="company"
                                    label="Company"
                                    name="company"
                                    autoComplete="company"
                                    value={carrier.company}
                                    validators={['required', 'matchRegexp:[a-z, A-Z, а-я, А-Я]']}
                                    errorMessages={['This field is required', 'Company name will be no numerical']}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextValidator
                                    variant="outlined"
                                    fullWidth
                                    id="country"
                                    label="Country code"
                                    name="country"
                                    autoComplete="country"
                                    value={carrier.country}
                                    validators={['required', 'matchRegexp:[a-z, A-Z, а-я, А-Я]']}
                                    errorMessages={['This field is required', 'country name will be no numerical']}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}

                        >
                            Add
                        </Button>
                    </ValidatorForm>
                </div>
            </Container>

        </React.Fragment>
    )
}
