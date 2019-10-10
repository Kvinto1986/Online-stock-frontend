import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import StepperPage from './stepperPage'
import {useAddCarrier, useAddDriver, useAddTtn, useGetCarrier, useGetDriver} from '../../api/apiRequests'
import {authUserFilter} from '../../filters'

export default () => {
    const [activeStep, setActiveStep] = useState(0)

    const handleNextStep = () => {
        setActiveStep(activeStep + 1)
    }

    const authUser = useSelector(authUserFilter)

    const [getCarrier, carrier, getCarrierError] = useGetCarrier(handleNextStep)
    const [addCarrier, , addCarrierError] = useAddCarrier(handleNextStep)
    const [getDriver, driver, getDriverError] = useGetDriver(handleNextStep)
    const [addDriver, , addDriverError] = useAddDriver(handleNextStep)
    const [addTtn, , addTtnError] = useAddTtn(handleNextStep)

    return <StepperPage
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        searchCarrier={getCarrier}
        searchCarrierError={getCarrierError}
        createCarrier={addCarrier}
        createCarrierError={addCarrierError}
        searchDriver={getDriver}
        searchDriverError={getDriverError}
        createDriver={addDriver}
        createDriverError={addDriverError}
        createTtn={addTtn}
        createTtnError={addTtnError}
        carrier={carrier}
        driver={driver}
        authUser={authUser}
    />
};