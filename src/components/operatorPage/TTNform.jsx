import React, {Fragment, useState} from 'react'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator'
import Grid from '@material-ui/core/Grid'
import useStyles from './operatorPageStyles'
import InputText from '../fields/textField'


export default ({onSubmit, error, currentCarrier, currentDriver, authUser}) => {
    const [TTN, setTTN] = useState({
        products: [],
        number: '',
        carrier: {
            unp: currentCarrier.unp,
            tel: currentCarrier.tel,
            company: currentCarrier.company
        },
        driver: {
            name: `${currentDriver.name} ${currentDriver.surname}`,
            license: currentDriver.license
        },
        registrar: {
            name: `${authUser.firstName} ${authUser.patronymic} ${authUser.lastName}`,
            id: authUser.id
        },
        carNumber:'',
        warehouseCompany:authUser.company,
        owner:'',
    })

    const handleInputChange = (e) => {
        setTTN({...TTN, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(TTN)
    }

    const classes = useStyles()

    return (
        <Fragment>
            <Container component="main" maxWidth="xl">
                <CssBaseline/>
                <div className={classes.paperTTN}>
                    <ValidatorForm className={classes.TTNform} onSubmit={handleSubmit}>
                        <Grid container>
                            <Grid item xl={4} >
                            </Grid>
                            <Grid item xl={1} >
                            <Typography component="h1" variant="h5" className={classes.TTNhead}>
                               TTN №
                            </Typography>
                            </Grid>
                            <Grid item xl={2} >
                                <InputText
                                    min={10}
                                    max={15}
                                    pattern={/^[1-9]*$/}
                                    fullWidth
                                    label="TTN number"
                                    required
                                    name='number'
                                    error={error}
                                    value={TTN}
                                    handleChange={setTTN}
                                    helperClass={classes.error}
                                />
                            </Grid>
                            <Grid item xl={4} >
                            </Grid>
                        </Grid>
                            <Grid container>
                                <Grid item xl={1} className={classes.gridItem}>
                                <Typography component="h1" variant="h6" className={classes.TTNhead}>
                                    Cargo owner:
                                </Typography>
                            </Grid>
                            <Grid item xl={10}>
                                <InputText
                                    min={2}
                                    max={30}
                                    pattern={/.*/}
                                    fullWidth
                                    label="Owner information"
                                    required
                                    name='owner'
                                    error={error}
                                    value={TTN}
                                    handleChange={setTTN}
                                    helperClass={classes.error}
                                />
                            </Grid>
                            </Grid>
                        <Grid container className={classes.formContainer}>
                                <Grid item xl={1} className={classes.gridItem}>
                                    <Typography component="h1" variant="h6" className={classes.TTNhead}>
                                        Carrier info:
                                    </Typography>
                                </Grid>
                                <Grid item xl={10}>
                                    <TextValidator
                                        fullWidth
                                        disabled={true}
                                        label={`UNP №  ${TTN.carrier.unp}, phone number:  ${TTN.carrier.tel}, company name: ${TTN.carrier.company}`}
                                    />
                                </Grid>
                        </Grid>

                        <Grid container>
                            <Grid item xl={1} className={classes.gridItem}>
                                <Typography component="h1" variant="h6" className={classes.TTNhead}>
                                    Driver info:
                                </Typography>
                            </Grid>
                            <Grid item xl={3}>
                                <TextValidator
                                    fullWidth
                                    disabled={true}
                                    label={`Name: ${TTN.driver.name}, driver license № ${TTN.driver.license}`}
                                />
                            </Grid>
                            <Grid item xl={1} className={classes.gridItem}>
                                <Typography component="h1" variant="h6" className={classes.TTNhead}>
                                    Car number:
                                </Typography>
                            </Grid>
                            <Grid item xl={1}>
                                <InputText
                                    min={6}
                                    max={10}
                                    pattern={/.*/}
                                    fullWidth
                                    label="Number of the car"
                                    required
                                    name='carNumber'
                                    error={error}
                                    value={TTN}
                                    handleChange={setTTN}
                                    helperClass={classes.error}
                                />
                            </Grid>
                            <Grid item xl={2} className={classes.gridItem}>
                                <Typography component="h1" variant="h6" className={classes.TTNheadEnd}>
                                    Company recipient:
                                </Typography>
                            </Grid>
                            <Grid item xl={2}>
                                <TextValidator
                                    fullWidth
                                    disabled={true}
                                    label={TTN.warehouseCompany}
                                />
                            </Grid>
                        </Grid>
                    </ValidatorForm>
                </div>
            </Container>
        </Fragment>
    )
}
