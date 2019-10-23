import React, {Fragment, useState} from 'react'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import useStyles from './operatorPageStyles'
import InputText from '../fields/textField'


export default ({onSubmit, error, id}) => {

    const [driver, setDriver] = useState({
        name: '',
        surname: ''
    })

    const handleSubmit = () => {
        onSubmit({license:id,...driver})
    }

    const classes = useStyles()

    return (
        <Fragment>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5" style={{textAlign: 'center', marginBottom: '5%'}}>
                        Register new Driver
                    </Typography>
                    <ValidatorForm className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextValidator
                                    disabled
                                    fullWidth
                                    label="Driver license number"
                                    variant="outlined"
                                    required
                                    name="license"
                                    value={id}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <InputText
                                    min={2}
                                    max={30}
                                    pattern={/^[a-zA-Z]*$/}
                                    variant="outlined"
                                    fullWidth
                                    required
                                    label="Name"
                                    name="name"
                                    error={error}
                                    value={driver}
                                    handleChange={setDriver}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <InputText
                                    min={2}
                                    max={30}
                                    pattern={/^[a-zA-Z]*$/}
                                    variant="outlined"
                                    fullWidth
                                    required
                                    label="Surname"
                                    name="surname"
                                    error={error}
                                    value={driver}
                                    handleChange={setDriver}
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
                            Submit
                        </Button>
                    </ValidatorForm>
                </div>
            </Container>

        </Fragment>
    )
}
