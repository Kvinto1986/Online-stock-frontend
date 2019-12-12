import React, {useMemo, useState} from 'react'
import Grid from '@material-ui/core/Grid/index'
import Button from '@material-ui/core/Button/index'
import DateFnsUtils from '@date-io/date-fns'
import FormHelperText from '@material-ui/core/FormHelperText'
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator'
import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers'

import useStyles from '../registerEmployee/registerEmployeeStyles'
import TextField from '../fields/textField'
import {storage} from '../../fireBaseConfig'
import useStateWithCallback from 'use-state-with-callback'


const initialForm = {
    firstName: '',
    lastName: '',
    patronymic: '',
    email: '',
    city: '',
    street: '',
    house: '',
    apartment: '',
    password: '',
    passwordAgain: '',
    avatar: ''
}

export default ({onSubmit, errors, initial}) => {
    console.log(initial)
    const [form, setForm] = useState(useMemo(() => ({...initialForm, ...initial}), [initial]))
    const [dateOfBirth, setDateOfBirth] = useState('1970-01-01')
    const classes = useStyles()
    const [avatar, setAvatar] = useStateWithCallback(false, avatar => {
        if(avatar) {
            handleUpl()
            setAvatar(false)
        }
    })
    const [avatarUri, setAvatarUri] = useState(false)
    // const handleInputChange = e => setForm({...form, [e.target.name]: e.target.value})

    ValidatorForm.addValidationRule('isPasswordMatch', value => value === form.password)

    const handleUpldChange = e => {
        console.log(e.target.files[0])
        if (e.target.files[0]) {
            setAvatar(e.target.files[0])

        }

    }
    const handleUpl = () => {
        console.log('sdsd')
        const uploadTask = storage.ref(`employes/${avatar.name}`).put(avatar)
        uploadTask.on(
          'state_changed',
          snapshot => {},
          err => { console.error(err)},
          () => {
              storage
                .ref(`employes`)
                .child(avatar.name)
                .getDownloadURL()
                .then(url => {
                    setAvatarUri(url)
                })
          }
        )
    }

    const handleSubmit = e => {
        e.preventDefault()

        const employee = Object.assign({
            firstName: form.firstName,
            lastName: form.lastName,
            patronymic: form.patronymic,
            email: form.email,
            city: form.city,
            street: form.street,
            house: form.house,
            apartment: form.apartment,
            dateOfBirth: dateOfBirth,
            avatar: avatarUri
            
        }, form.password ? {password: form.password} : {})
        console.log(employee)
        onSubmit(employee)
    }

    return (
        <ValidatorForm noValidate onSubmit={handleSubmit} onError={error => {
            debugger
        }}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <label>
                        <img src={avatarUri ? avatarUri : initial.avatar} className={classes.avatar} alt="avatar"/>
                        <input type="file" className={classes.file} onChange={handleUpldChange}/>
                    </label>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <TextField
                        min={2}
                        max={30}
                        required
                        fullWidth
                        value={form}
                        error={errors}
                        name="lastName"
                        label="Last name"
                        handleChange={setForm}
                        inputProps={{'data-testid': 'lastName'}}
                        pattern={/^[-a-zA-Z]*$/}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        fullWidth
                        name="firstName"
                        label="First name"
                        pattern={/^[-a-zA-Z]*$/}
                        value={form}
                        error={errors}
                        handleChange={setForm}
                        min={2}
                        max={30}
                        inputProps={{'data-testid': 'firstName'}}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        fullWidth
                        label="Patronymic"
                        name="patronymic"
                        pattern={/^[-a-zA-Z]*$/}
                        value={form}
                        error={errors}
                        handleChange={setForm}
                        min={2}
                        max={30}
                        inputProps={{'data-testid': 'patronymic'}}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                            required
                            fullWidth
                            className={classes.formControl}
                            disableFuture
                            value={dateOfBirth}
                            onChange={setDateOfBirth}
                            name="dateOfBirth"
                            openTo="year"
                            format="dd/MM/yyyy"
                            label="Date of Birth"
                            views={['year', 'month', 'date']}
                            minDate={new Date('1960-01-01')}
                            maxDate={new Date('2001-01-01')}
                            inputProps={{'data-testid': 'dateOfBirth'}}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        value={form}
                        error={errors}
                        name="email"
                        label="E-mail"
                        pattern={/.*/}
                        handleChange={setForm}
                        validators={['isEmail']}
                        inputProps={{'data-testid': 'email'}}
                        errorMessages={['Email is not valid']}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        min={2}
                        max={30}
                        required
                        fullWidth
                        name="city"
                        label="City"
                        inputProps={{'data-testid': 'city'}}
                        pattern={/^[-a-zA-Z ]*$/}
                        value={form}
                        error={errors}
                        handleChange={setForm}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        min={2}
                        max={30}
                        required
                        fullWidth
                        value={form}
                        name="street"
                        label="Street"
                        inputProps={{'data-testid': 'street'}}
                        error={errors}
                        handleChange={setForm}
                        pattern={/^[-a-zA-Z0-9 /]*$/}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        name="house"
                        label="House number"
                        inputProps={{'data-testid': 'house'}}
                        pattern={/^[-a-zA-Z0-9 /]*$/}
                        value={form}
                        error={errors}
                        handleChange={setForm}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        pattern={/^[-a-zA-Z0-9 /]*$/}
                        fullWidth
                        name="apartment"
                        inputProps={{'data-testid': 'apartment'}}
                        value={form}
                        error={errors}
                        label="Apartment number"
                        handleChange={setForm}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        type="password"
                        name="password"
                        inputProps={{'data-testid': 'password'}}
                        label="Password"
                        pattern={/.*/}
                        value={form}
                        error={errors}
                        handleChange={setForm}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        type="password"
                        name="passwordAgain"
                        inputProps={{'data-testid': 'passwordAgain'}}
                        label="Password again"
                        pattern={/.*/}
                        value={form}
                        error={errors}
                        handleChange={setForm}
                        validators={['isPasswordMatch']}
                        errorMessages={['Password does not match']}
                    />
                    {errors && (
                        <FormHelperText className={classes.helperText}>{errors.password}</FormHelperText>)}
                </Grid>
            </Grid>

            <Grid item xs={12} sm={12}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    data-testid="submit"
                    className={classes.submit}
                >
                    Submit
                </Button>
            </Grid>
        </ValidatorForm>
    )
}
