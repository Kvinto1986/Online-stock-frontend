import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import React, {useState} from "react";
import useStyles from "./loginStyles";


export default ({onSubmit, errors}) => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        errors: {}
    });

    const handleInputChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email: values.email,
            password: values.password,
        };

        onSubmit(user);

    };

    const classes = useStyles();

    return (<ValidatorForm className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextValidator
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleInputChange}
                value={values.email}
                validators={['required', 'isEmail']}
                errorMessages={['this field is required', 'email is not valid']}
            />
            <TextValidator
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={values.password}
                autoComplete="current-password"
                validators={['required']}
                errorMessages={['this field is required']}
                onChange={handleInputChange}
            />
            <FormControlLabel
                control={<Checkbox value="remember" color="primary"/>}
                label="Remember me"
            />
            <Box mt={1}>
                <span style={{color: 'red'}}>{errors.email}</span>
                <span style={{color: 'red'}}>{errors.password}</span>
            </Box>

            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Sign In
            </Button>
            <Grid container>
                <Grid item xs>
                    <Link href="#" variant="body2">
                        Forgot password?
                    </Link>
                </Grid>
            </Grid>
        </ValidatorForm>
    )
}