import React, {Fragment, useState} from 'react'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import {ValidatorForm,TextValidator} from 'react-material-ui-form-validator'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import useStyles from './operatorPageStyles'
import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/dist/style.css'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'

import InputText from '../fields/textField'

export default ({onSubmit, error, id}) => {

    const [carrier, setCarrier] = useState({
        email: '',
        tel: '',
        countryCode: '',
        company: ''
    })

    const handleInputChange = (e) => {
        setCarrier({...carrier, [e.target.name]: e.target.value})
    }

    const handleSubmit = () => {
        onSubmit({unp:id,...carrier})
    }

    const classes = useStyles()

    return (
        <Fragment>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5" style={{textAlign: 'center', marginBottom: '5%'}}>
                        Register new Carrier
                    </Typography>
                    <ValidatorForm className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextValidator
                                    disabled
                                    fullWidth
                                    label="License number"
                                    variant="outlined"
                                    required
                                    name="unp"
                                    value={id}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <InputText
                                    variant="outlined"
                                    pattern={/.*/}
                                    fullWidth
                                    required
                                    label="Email"
                                    name="email"
                                    error={error}
                                    value={carrier}
                                    validators={['isEmail']}
                                    errorMessages={['email is not valid']}
                                    handleChange={setCarrier}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={5}>
                            <Grid item xs={12} style={{marginBottom: '9%'}}>
                                <ReactPhoneInput
                                    required
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
                                <InputText
                                    variant="outlined"
                                    pattern={/.*/}
                                    fullWidth
                                    label="Company"
                                    name="company"
                                    error={error}
                                    value={carrier}
                                    validators={['minStringLength:2', 'maxStringLength:30']}
                                    errorMessages={['the value must be at least 2 characters', 'the value must be no more than 30 characters']}
                                    handleChange={setCarrier}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel htmlFor="outlined-age-simple">
                                        Country code
                                    </InputLabel>
                                    <Select
                                        required
                                        onChange={handleInputChange}
                                        value={carrier.countryCode}
                                        inputProps={{
                                            name: 'countryCode',
                                        }}
                                    >
                                        <MenuItem value={'Belarus'}>BY</MenuItem>
                                        <MenuItem value={'Ukraine'}>UA</MenuItem>
                                        <MenuItem value={'Poland'}>PL</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Submit
                        </Button>
                    </ValidatorForm>
                </div>
            </Container>

        </Fragment>
    )
}
