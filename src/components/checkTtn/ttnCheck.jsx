import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import {checkTtnStyle} from './ttnCheckStyles'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


export const TtnCheck = ({submit}) => {
    const classes = checkTtnStyle()
    const[ttn, setTtn] = useState({
        ttnNumber: ''
    })
    const handleTtn = name => (e) => {
        setTtn({...setTtn, [name]: e.target.value})
    }
    const handleForm = (e) => {
        submit(ttn)
    }
    return (
        <Container maxWidth="sm">
            <ValidatorForm   noValidate onSubmit={handleForm}>
                <TextValidator
                    id="standard-ttn"
                    label="Search TTN"
                    type="text"
                    className={classes.ttn}
                    margin="normal"
                    onChange={handleTtn("ttnNumber")}
                    value={ttn.ttnNumber}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <Button
                    variant="contained"
                    className={classes.button}
                    color='primary'
                    type='submit'
                >
                    Find
                </Button>
            </ValidatorForm>

        </Container>
    )
}
