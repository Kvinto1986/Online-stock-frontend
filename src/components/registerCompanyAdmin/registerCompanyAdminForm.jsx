import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator'
import useStyles from './registerCompanyAdminStyles'
import Box from '@material-ui/core/Box'

export default ({onSubmit, errors}) => {

    const [values, setValues] = useState({
        company: '',
        email: '',
        password: '',
        password_confirm: '',
        errors: {}
    })

    const handleInputChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const admin = {
            company: values.company,
            email: values.email,
            role: values.role
        }

        onSubmit(admin)

    }

    const classes = useStyles()

    return (

        <ValidatorForm className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextValidator
                        variant="outlined"
                        required
                        fullWidth
                        id="company"
                        label="Company name"
                        name="company"
                        autoComplete="Company name"
                        value={values.company}
                        onChange={handleInputChange}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextValidator
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={values.email}
                        onChange={handleInputChange}
                        validators={['required', 'isEmail']}
                        errorMessages={['this field is required', 'email is not valid']}
                    />
                </Grid>
            </Grid>
            <Box mt={1}>
                {errors && (
                    <span style={{color: 'red'}}>{errors.email}</span>
                )}
                {errors && (
                    < span style={{color: 'red'}}>{errors.password}</span>
                )}
            </Box>
            <Box mt={5}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Create account
                </Button>
            </Box>
        </ValidatorForm>
    )
}
