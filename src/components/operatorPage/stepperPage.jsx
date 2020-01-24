import React, {Fragment, useState} from 'react'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import useStyles from './operatorPageStyles'
import CarrierForm from './carrierForm'
import DriverForm from './driverForm'
import TTNForm from './TTNform'
import Search from './search'
import ExpansionPanel from './expansionPanel'
import SuccessPage from './successPage'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

const steps = ['Carrier check', 'Driver check', 'Check order', 'Create TTN']

export default ({
        activeStep, setActiveStep, searchCarrier, searchCarrierError, createCarrier, createCarrierError,
        searchDriver, searchDriverError, createDriver, createDriverError, createTtn, createTtnError,
        carriers, drivers, authUser, services, searchOrder, searchOrderError, orders, handleResetForm,
}) => {

    const classes = useStyles()

    const [carrierFormVisibility, setCarrierFormVisibility] = useState(false)
    const [driverFormVisibility, setDriverFormVisibility] = useState(false)
    const [carrierId, setCarrierId] = useState('')
    const [driverId, setDriverId] = useState('')
    const [ttnId, setTtnId] = useState('')

    function getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <Fragment>
                    <Search
                        search={searchCarrier}
                        searchText="Search carrier by UNP"
                        error={searchCarrierError.carrier}
                        value={carrierId}
                        setValue={setCarrierId}
                        length={10}
                    />
                    {searchCarrierError.carrier && (
                        <ExpansionPanel
                            formVisibility={carrierFormVisibility}
                            setFormVisibility={setCarrierFormVisibility}
                            Form={CarrierForm}
                            onSubmit={createCarrier}
                            error={createCarrierError}
                            id={carrierId}
                        />
                    )}
                </Fragment>
            case 1:
                return <Fragment>
                    <Search
                        search={searchDriver}
                        searchText="Search driver by driver license"
                        error={searchDriverError.driver}
                        value={driverId}
                        setValue={setDriverId}
                        length={10}
                    />
                    {searchDriverError.driver && (
                        <ExpansionPanel
                            setValue={setDriverId}
                            value={driverId}
                            formVisibility={driverFormVisibility}
                            setFormVisibility={setDriverFormVisibility}
                            Form={DriverForm}
                            onSubmit={createDriver}
                            error={createDriverError}
                            id={driverId}
                        />
                    )}
                </Fragment>
            case 2:
                return <Fragment>
                    <Search
                        search={searchOrder}
                        searchText="Search order by TTN number"
                        error={searchOrderError.order}
                        value={ttnId}
                        setValue={setTtnId}
                        length={10}
                    />
                    {searchOrderError.order && (
                        <Container maxWidth="sm">
                            <Box mt={5}>
                                <Button
                                    variant="contained"
                                    color="primary" 
                                    type="button"
                                    size="medium"
                                    onClick={() => setActiveStep(x => x + 1)}
                                >
                                    Create custom TTN order
                                </Button>
                            </Box>
                        </Container>
                    )}
                </Fragment>
            case 3:
                return <TTNForm
                    ttnNumber={ttnId}
                    carrier={carriers[carrierId]}
                    driver={drivers[driverId]}
                    onSubmit={createTtn}
                    error={createTtnError}
                    authUser={authUser}
                    services={services}
                    order={orders[ttnId]}
                />
            case 4:
                return <SuccessPage
                    reset={handleResetForm}
                />
            default:
                return 'Unknown step'
        }
    }

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel style={{backgroundColor:'whiteSmoke'}}>
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {getStepContent(activeStep)}
        </div>
    )
}
