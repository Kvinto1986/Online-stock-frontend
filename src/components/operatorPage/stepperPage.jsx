import React, {useState} from 'react'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Typography from '@material-ui/core/Typography'
import useStyles from './operatorPageStyles'
import CarrierForm from './expansionCarrierForm'

import Search from './search'


export default ({
                    activeStep, searchCarrier, searchCarrierError, createCarrier, createCarrierError,
                    searchDriver, searchDriverError, createDriver, createDriverError, createTtn, createTtnError
                }) => {

    const classes = useStyles()
    const steps = getSteps()

    const [carrierFormVisibility, setCarrierFormVisibility] = useState(false)
    const [driverFormVisibility, setDriverFormVisibility] = useState(false)

    function getSteps() {
        return ['Carrier check', 'Driver check', 'Create TTN', 'Finish']
    }

    function getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <Search
                    search={searchCarrier}
                    searchText='Search carrier by UNP'
                    error={searchCarrierError.carrier}
                    formVisibility={carrierFormVisibility}
                    setFormVisibility={setCarrierFormVisibility}
                    Form={CarrierForm}
                />
            case 1:
                return <Search
                    search={searchDriver}
                    searchText='Search driver by driver license'
                    error={searchDriverError.driver}
                />
            case 2:
                return <Search
                />
            case 3:
                return <Search
                />
            default:
                return 'Uknown step'
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
            <div>
                <Typography>{getStepContent(activeStep)}</Typography>
            </div>
        </div>
    )
}