import React, {useState} from 'react'
import TextField from '../fields/textField'
import {ValidatorForm} from 'react-material-ui-form-validator'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import useStyles from './style'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

export default ({onCreate, error}) => {
    const classes = useStyles()
    const [form, setForm] = useState({name: '', email: ''})

    return (
        <Box mb={15}>
            <Box mb={5}>
                <Typography component="h4" variant="h4" align="center" color="textPrimary" gutterBottom className={classes.welcomeTitle}>
                    Create new service
                </Typography>
            </Box>
            <Box>
                <Grid
                    spacing={3}
                    container
                    component={ValidatorForm}
                    onSubmit={() => onCreate(form)}
                    noValidate
                    alignItems="center"
                >
                    <Grid item sm={6} md={5} см={12} xs={12}>
                        <TextField
                            required
                            fullWidth
                            label="System name*"
                            pattern={/^[a-z0-9_]*$/}
                            handleChange={setForm}
                            min={2}
                            max={30}
                            inputProps={{'data-testid': 'name'}}
                            name="name"
                            value={form}
                            error={error}
                            helperClass={classes.error}
                        />
                    </Grid>
                    <Grid item sm={6} md={5} см={12} xs={12}>
                        <TextField
                            required
                            fullWidth
                            label="System email*"
                            pattern={/.*/}
                            handleChange={setForm}
                            inputProps={{'data-testid': 'name'}}
                            name="email"
                            value={form}
                            error={error}
                            validators={['required', 'isEmail']}
                            errorMessages={['this field is required', 'email is not valid']}
                            helperClass={classes.error}
                        />
                    </Grid>
                    <Grid item md={2} className={classes.center}>
                        <Button data-testid="create" type="submit" variant="contained" >
                            Add
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
