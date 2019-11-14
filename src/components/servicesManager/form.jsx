import React, {useState} from 'react'
import TextField from '../fields/textField'
import {ValidatorForm} from 'react-material-ui-form-validator'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import useStyles from './style'

function Form({onCreate, error}) {
    const classes = useStyles()
    const [form, setForm] = useState({name: ''})

    return <Grid
        container
        component={ValidatorForm}
        onSubmit={() => onCreate(form)}
        noValidate
        alignItems="center"
    >
        <Grid item xs={10}>
            <TextField
                required
                fullWidth
                label="System name"
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
        <Grid item xs={2} className={classes.center}>
            <Button data-testid="create" type="submit">
                Add system
            </Button>
        </Grid>
    </Grid>
}

export default Form