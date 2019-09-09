import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import {checkTtnStyle} from './ttnCheckStyles'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
export const TtnCheck = ({submit}) => {
    const classes = checkTtnStyle()
    const[ttn, setTtn] = useState({})
    const handleTtn = name => (e) => {
        setTtn({...setTtn, [name]: e.target.value})
    }
    const handleForm = (e) => {
        submit(ttn)
    }
    return (
        <Container maxWidth="sm">
            <ValidatorForm   noValidate onSubmit={handleForm}>
                <TextField
                    id="standard-ttn"
                    label="Search TTN"
                    type="search"
                    className={classes.ttn}
                    margin="normal"
                    onChange={handleTtn("ttnNumber")}
                />
                <Button
                    variant="contained"
                    className={classes.button}
                    type="submit"
                >

                    Default
                </Button>
            </ValidatorForm>

        </Container>
    )
}
