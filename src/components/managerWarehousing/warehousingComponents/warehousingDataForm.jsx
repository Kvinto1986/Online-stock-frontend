import React, { useState, useEffect } from 'react'
import { ValidatorForm } from 'react-material-ui-form-validator'
import { Container, Box, Typography, Grid, Button, List, ListItem, ListItemText } from '@material-ui/core'
import InputText from '../../fields/textField'
import useStyles from '../warehousingStyles'
import {useReset} from '../../../hooks/hook'

const initialFormState = {
    number: ''
}

const initialListState = {
    ttnDate: '',
    managerInitials: '',
    operatorName: '',
}

const WarehousingDataForm = ({setCurrentTTN, dndIsShown, getFormData, getTtn, ttnError, ttns, currentManager}) => {
    const [formState, setFormState] = useState(initialFormState)
    const [listState, setListState] = useState(initialListState)
    const [ttnStatusErr, setTtnStatusErr] = useState(null)

    const classes = useStyles()

    const [key, reset] = useReset()

    useEffect(() => {
        const currentTtn = ttns[formState.number]
        
        if(currentTtn && currentTtn.id === formState.number) {
            setCurrentTTN(currentTtn)
            
            if(currentTtn.status === 'checked') {
                const {firstName, lastName, patronymic} = currentManager

                const managerInitials = `${firstName} ${lastName} ${patronymic}`
                const unformatedDate = new Date(currentTtn.dataOfRegistration)
                
                const fornatedDate = 
                unformatedDate.getDate() + '.' +
                unformatedDate.getMonth() + '.' +
                unformatedDate.getFullYear()

                setTtnStatusErr(null)
                dndIsShown(true)
                
                setFormState(initialFormState)
                setListState({
                    ...listState, 
                    ttnDate: fornatedDate,
                    managerInitials: managerInitials,
                    operatorName: currentTtn.owner,
                })
    
                getFormData(currentTtn.id)
                reset()
            }
            else {
                setTtnStatusErr('TTN must been checked')     
            }
        }
    }, [currentManager, dndIsShown, formState.number, getFormData, listState, reset, setCurrentTTN, ttns])

    useEffect(() => {
        if (ttnError.TTN) {
            setListState(initialListState)
        }
    }, [ttnError.TTN])
    
    const {ttnDate, managerInitials, operatorName} = listState
    
    return (
        <Container component="main" maxWidth="xs">
            <Box mt={5}>
                <Box>
                    <Typography compoment="h1" variant="h5">
                        Transfer goods to store
                    </Typography>
                </Box>
                <ValidatorForm onSubmit={() => getTtn(formState.number)}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box mt={2}>
                                <Box>
                                    <InputText
                                        min={10}
                                        max={11}
                                        pattern={/^[0-9]*$/}
                                        fullWidth
                                        label="TTN number"
                                        required
                                        name="number"
                                        error={ttnError}
                                        value={formState}
                                        handleChange={setFormState}
                                        helperClass={classes.inputError}
                                        key={key}
                                    />
                                    {(ttnStatusErr && !ttnError.TTN) && <small style={{color: 'red'}}>{ttnStatusErr}</small>} 
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
                                        <List disablePadding>
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