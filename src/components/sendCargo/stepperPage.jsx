import React, {Fragment, useState} from 'react'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import useStyles from '../operatorPage/operatorPageStyles'
import CarrierForm from '../operatorPage/carrierForm'
import DriverForm from '../operatorPage/driverForm'
import SendTTNForm from './sendTTNform'
import Search from '../operatorPage/search'
import ExpansionPanel from '../operatorPage/expansionPanel'
import SuccessPage from '../operatorPage/successPage'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

const steps = ['Carrier check', 'Driver check', 'Check order', 'Create TTN']

export default ({
    activeStep, setActiveStep, searchCarrier, searchCarrierError, createCarrier, createCarrierError,
    searchDriver, searchDriverError, createDriver, createDriverError, createTtn, createTtnError,
    carriers, drivers, authUser, searchOrder, searchOrderError, orders, handleResetForm
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
                            setValue={setCarrierId}
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
                            formVisibility={driverFormVisibility}
                            setFormVisibility={setDriverFormVisibility}
                            Form={DriverForm}
                            onSubmit={createDriver}
                            error={createDriverError}
                            id={driverId}
                            setValue={setDriverId}
                        />
                    )}
                </Fragment>
            case 2:
                return <Container component="main" className={classes.main} maxWidth="sm">
                    <Search
                        search={searchOrder}
                        searchText="Search order by TTN number"
                        error={searchOrderError.order}
                        value={ttnId}
                        setValue={setTtnId}
                        length={10}
                    />
                    {searchOrderError.order && (
                        <Box display="flex" justifyContent="center" mt={5}>
                            <Button 
                                variant="outlined" 
                                color="primary" 
                                type="button"
                                onClick={() => setActiveStep(x => x + 1)}
                            >
                                Create custom TTN order
                            </Button>
                        </Box>
                    )}
                </Container>
            case 3:
                return <SendTTNForm
                    ttnNumber={ttnId}
                    carrier={carriers[carrierId]}
                    driver={drivers[driverId]}
                    onSubmit={createTtn}
                    error={createTtnError}
                    authUser={authUser}
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
            <Stepper activeStep={activeStep} alternativeLabel>
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
