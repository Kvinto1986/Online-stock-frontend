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


export default ({
                    activeStep, setActiveStep,searchCarrier, searchCarrierError, createCarrier, createCarrierError,
                    searchDriver, searchDriverError, createDriver, createDriverError, createTtn, createTtnError,
                    currentCarrier,currentDriver,authUser
                }) => {

    const classes = useStyles()
    const steps = getSteps()

    const [carrierFormVisibility, setCarrierFormVisibility] = useState(false)
    const [driverFormVisibility, setDriverFormVisibility] = useState(false)

    function getSteps() {
        return ['Carrier check', 'Driver check', 'Create TTN']
    }

    function getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <Fragment>
                    <Search
                        search={searchCarrier}
                        searchText='Search carrier by UNP'
                        error={searchCarrierError.carrier}
                    />
                    {searchCarrierError.carrier && (
                        <ExpansionPanel
                            formVisibility={carrierFormVisibility}
                            setFormVisibility={setCarrierFormVisibility}
                            Form={CarrierForm}
                            onSubmit={createCarrier}
                            error={createCarrierError}
                        />
                    )}
                </Fragment>
            case 1:
                return <Fragment>
                    <Search
                        search={searchDriver}
                        searchText='Search driver by driver license'
                        error={searchDriverError.driver}
                    />
                    {searchDriverError.driver && (
                        <ExpansionPanel
                            formVisibility={driverFormVisibility}
                            setFormVisibility={setDriverFormVisibility}
                            Form={DriverForm}
                            onSubmit={createDriver}
                            error={createDriverError}
                        />
                    )}
                </Fragment>

            case 2:
                return <TTNForm
                    currentCarrier={currentCarrier}
                    currentDriver={currentDriver}
                    onSubmit={createTtn}
                    error={createTtnError}
                    authUser={authUser}
                />
            default:
                return <SuccessPage
                    setActiveStep={setActiveStep}
                />
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