import React, {useState} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {registerAdmin} from '../../actions/companyAdminAction';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
import useStyles from './registerAdminStyles'
import Box from "@material-ui/core/Box";

const AdminRegister = (props) => {
    const [values, setValues] = useState({
        company:'',
        email: '',
        password: '',
        password_confirm:'',
        errors: {}
    });

    const handleInputChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    };

    const reset = () => {
        setValues({...values, role:'companyAdmin',
            company:'',
            email: '',
            errors: {}});

        Swal.fire({
            type: 'success',
            title: 'Congratulations!',
            text: 'Нou have successfully logged !',
            allowOutsideClick: false
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const admin = {
            company:values.company,
            email: values.email,
            role:values.role
        };

        props.registerAdmin(admin,reset);

    };

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    New company admin form
                </Typography>
                <ValidatorForm className={classes.form} noValidate onSubmit={handleSubmit} >
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
                        <span style={{color: 'red'}}>{props.errors.email}</span>
                        <span style={{color: 'red'}}>{props.errors.password}</span>
                    </Box>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Create account
                    </Button>
                </ValidatorForm>
            </div>
        </Container>
    );
};

AdminRegister.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {registerAdmin})(AdminRegister)