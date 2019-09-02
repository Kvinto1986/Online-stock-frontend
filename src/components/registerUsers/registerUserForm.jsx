import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid/index'
import Button from '@material-ui/core/Button/index'
import DateFnsUtils from "@date-io/date-fns";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {
    DatePicker,
    MuiPickersUtilsProvider
} from "@material-ui/pickers";
import FormControl from "@material-ui/core/FormControl";
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

import useStyles from './registerUserStyles'


const Form = ({props}) => {

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        patronymic: '',
        email: '',
        city: '',
        street: '',
        house: '',
        apartment: '',
        role: '',
        login: '',
        password: ''
    });

    const [dateOfBirth, setDateOfBirth] = useState('1970-01-01');

    const classes = useStyles();

    const handleInputChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    };

    const handleChangeDate = (e) => {
        setDateOfBirth(e)
    };

    const reset = () => {

        Swal.fire({
            type: 'success',
            title: 'Congratulations!',
            text: 'User registration was successful !',
            allowOutsideClick: false
        }).then(() => {
            window.location.reload()
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            firstName: form.firstName,
            lastName: form.lastName,
            patronymic: form.patronymic,
            email: form.email,
            city: form.city,
            street: form.street,
            house: form.house,
            apartment: form.apartment,
            position: form.role,
            dateOfBirth: dateOfBirth,
            company: props.auth.user.company
        };

        props.registerUser(user, reset)
    };

    return (
        <ValidatorForm noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <TextValidator
                        required
                        fullWidth
                        name='lastName'
                        label='Last name'
                        type='text'
                        value={form.lastName}
                        onChange={handleInputChange}
                        validators={['required', 'matchRegexp:[a-zA-Z]$', 'minStringLength:2', 'maxStringLength:30']}
                        errorMessages={['this field is required', 'the value must contain only letters', 'the value must be at least 2 characters', 'the value must be no more than 30 characters']}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextValidator
                        required
                        fullWidth
                        label='First name'
                        name='firstName'
                        type='text'
                        value={form.firstName}
                        onChange={handleInputChange}
                        validators={['required', 'matchRegexp:[a-zA-Z]$', 'minStringLength:2', 'maxStringLength:30']}
                        errorMessages={['this field is required', 'the value must contain only letters', 'the value must be at least 2 characters', 'the value must be no more than 30 characters']}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextValidator
                        required
                        fullWidth
                        label='Patronymic'
                        name='patronymic'
                        type='text'
                        value={form.patronymic}
                        onChange={handleInputChange}
                        validators={['required', 'matchRegexp:[a-zA-Z]$', 'minStringLength:2', 'maxStringLength:30']}
                        errorMessages={['this field is required', 'the value must contain only letters', 'the value must be at least 2 characters', 'the value must be no more than 30 characters']}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                            required
                            className={classes.formControl}
                            disableFuture
                            value={dateOfBirth}
                            onChange={handleChangeDate}
                            name='dateOfBirth'
                            openTo="year"
                            format="dd/MM/yyyy"
                            label="Date of Birth"
                            views={["year", "month", "date"]}
                            minDate={new Date("1960-01-01")}
                            maxDate={new Date("2001-01-01")}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControl className={classes.formControl} required>
                        <InputLabel>Role</InputLabel>
                        <Select
                            value={form.role}
                            onChange={handleInputChange}
                            inputProps={{
                                name: 'role',
                            }}
                        >
                            <MenuItem value='manager'>Manager</MenuItem>
                            <MenuItem value='operator'>Operator</MenuItem>
                            <MenuItem value='controller'>Controller</MenuItem>
                        </Select>
                        {props.errors && (
                            <FormHelperText className={classes.helperText}>{props.errors.role}</FormHelperText>)}

                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <TextValidator
                        required
                        fullWidth
                        name='email'
                        label='E-mail'
                        type='text'
                        value={form.email}
                        onChange={handleInputChange}
                        validators={['required', 'isEmail']}
                        errorMessages={['this field is required', 'email is not valid']}
                    />
                    {props.errors && (
                        <FormHelperText className={classes.helperText}>{props.errors.email}</FormHelperText>)}
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextValidator
                        required
                        fullWidth
                        name='city'
                        label='City'
                        type='text'
                        value={form.city}
                        onChange={handleInputChange}
                        validators={['required', 'matchRegexp:[a-zA-Z]$', 'minStringLength:2', 'maxStringLength:30']}
                        errorMessages={['this field is required', 'the value must contain only letters', 'the value must be at least 2 characters', 'the value must be no more than 30 characters']}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextValidator
                        required
                        fullWidth
                        name='street'
                        label='Street'
                        type='text'
                        value={form.street}
                        onChange={handleInputChange}
                        validators={['required', 'minStringLength:2', 'maxStringLength:30']}
                        errorMessages={['this field is required', 'the value must be at least 2 characters', 'the value must be no more than 30 characters']}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextValidator
                        required
                        fullWidth
                        name='house'
                        type='number'
                        value={form.house}
                        label='House number'
                        onChange={handleInputChange}
                        validators={['required', 'minNumber:1', 'isPositive', 'isNumber', 'minStringLength:1', 'maxStringLength:10']}
                        errorMessages={['this field is required', 'value must be greater than 0', 'the value must be positive', 'value must be a number', 'the value must be at least 1 characters', 'the value must be no more than 10 characters']}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextValidator
                        required
                        fullWidth
                        type='number'
                        name='apartment'
                        value={form.apartment}
                        label='Apartment number'
                        onChange={handleInputChange}
                        validators={['required', 'minNumber:1', 'isPositive', 'isNumber', 'minStringLength:1', 'maxStringLength:10']}
                        errorMessages={['this field is required', 'value must be greater than 0', 'the value must be positive.', 'value must be a number', 'the value must be at least 1 characters', 'the value must be no more than 10 characters']}
                    />
                </Grid>
            </Grid>

            <Grid item xs={12} sm={12}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Create user
                </Button>
            </Grid>
        </ValidatorForm>
    )
};

export default Form