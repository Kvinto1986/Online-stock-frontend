import React, {useState} from 'react'
import StepperPage from './stepperPage'
import {useGetCarrier, useAddCarrier, useGetDriver, useAddDriver, useAddTtn} from '../../api/apiRequests'
import {carriersFilter, driversFilter,authUserFilter} from '../../filters'
import {useSelector} from 'react-redux'

export default () => {
    const [activeStep, setActiveStep] = useState(0)

    const handleNext = () => {
        setActiveStep(activeStep + 1)
    }

    const currentCarrier = useSelector(carriersFilter)
    const currentDriver = useSelector(driversFilter)
    const authUser = useSelector(authUserFilter)

    const [getCarrier, , getCarrierError] = useGetCarrier(handleNext)
    const [addCarrier, , addCarrierError] = useAddCarrier(handleNext)
    const [getDriver, , getDriverError] = useGetDriver(handleNext)
    const [addDriver, , addDriverError] = useAddDriver(handleNext)
    const [addTtn, , addTtnError] = useAddTtn(handleNext)

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
        currentCarrier={currentCarrier.data}
        currentDriver={currentDriver.data}
        authUser={authUser}
    />
};