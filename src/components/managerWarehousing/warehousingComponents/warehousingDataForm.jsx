import React, {useState, useEffect} from 'react'
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator'
import {Container, Box, Typography, Grid, Button, List, ListItem, ListItemText} from '@material-ui/core'

const initialFormState = {
    ttnNumber: ''
}

const initialListState = {
    ttnDate: '',
    managerInitials: '',
    operatorName: '',
}

const WarehousingDataForm = ({setCurrentTTN, dndIsShown, getFormData, getTtn, ttnError, ttn, currentManager}) => {

    const [formState, setFormState] = useState(initialFormState)
    const [listState, setListState] = useState(initialListState)
    const [ttnStatusErr, setTtnStatusErr] = useState(null)

    useEffect(() => {
        if (ttn && Object.keys(ttn).length > 0) {
            const currentTtn = ttn[formState.ttnNumber]

            setCurrentTTN(currentTtn)

            if (currentTtn && currentTtn.status === 'checked') {

                const {firstName, lastName, patronymic} = currentManager
                const managerInitials = `${firstName} ${lastName} ${patronymic}`

                const date =
                    new Date(currentTtn.dataOfRegistration).getDate() + '.' +
                    new Date(currentTtn.dataOfRegistration).getMonth() + '.' +
                    new Date(currentTtn.dataOfRegistration).getFullYear()

                setTtnStatusErr(null)
                dndIsShown(true)
                setFormState(initialFormState)
                setListState({
                    ...listState,
                    ttnDate: date,
                    managerInitials: managerInitials,
                    operatorName: currentTtn.owner,
                })

                getFormData(currentTtn.id)
            } else {
                setTtnStatusErr('TTN must been checked')
            }
        }
    }, [ttn])

    useEffect(() => {
        if (ttnError.TTN) {
            setListState(initialListState)
        }
    }, [ttnError.TTN])

    const handleChange = e => {
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    const {ttnNumber} = formState
    const {ttnDate, managerInitials, operatorName} = listState

    return (
        <Container component="main" maxWidth="xs">
            <Box mt={5}>
                <Box>
                    <Typography compoment="h1" variant="h5">
                        Transfer goods to store
                    </Typography>
                </Box>
                <ValidatorForm onSubmit={() => getTtn(formState.ttnNumber)}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box mt={1}>
                                <Box>
                                    <TextValidator
                                        required
                                        fullWidth
                                        id="ttnNumber"
                                        label="TTN number"
                                        name="ttnNumber"
                                        autoComplete="ttnNumber"
                                        onChange={handleChange}
                                        value={ttnNumber}
                                    />
                                    {(ttnError.TTN && !operatorName) && <p style={{color: 'red'}}>{ttnError.TTN}</p>}
                                    {(ttnStatusErr && !ttnError.TTN) && <p style={{color: 'red'}}>{ttnStatusErr}</p>}
                                </Box>
                                <Box mt={2}>
                                    <Button
                                        type="submit"
                                        variant="outlined"
                                    >
                                        Fetch TTN data
                                    </Button>
                                </Box>
                            </Box>
                            {
                                (
                                    ttnDate &&
                                    managerInitials &&
                                    operatorName
                                ) && (
                                    <Box mt={10}>
                                        <Box display="flex" justifyContent="center">
                                            <Typography variant="h6">
                                                TTN details
                                            </Typography>
                                        </Box>
                                        <List dense>
                                            <ListItem>
                                                <ListItemText
                                                    primary="TTN register date"
                                                    secondary={ttnDate}
                                                />
                                                <ListItemText
                                                    primary="Manger initials"
                                                    secondary={managerInitials}
                                                />
                                                <ListItemText
                                                    primary="Sender"
                                                    secondary={operatorName}
                                                />
                                            </ListItem>
                                        </List>
                                    </Box>
                                )
                            }
                        </Grid>
                    </Grid>
                </ValidatorForm>
            </Box>
        </Container>
    )
}

export default WarehousingDataForm