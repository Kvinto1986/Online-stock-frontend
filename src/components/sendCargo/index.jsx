import React, {useCallback, useState} from 'react'
import {useSelector} from 'react-redux'
import StepperPage from './stepperPage'
import {useAddCarrier, useAddDriver, useAddTtnOut, useGetCarrier, useGetDriver} from '../../api/apiRequests'
import {authUserFilter} from '../../filters'

export default () => {
    const [activeStep, setActiveStep] = useState(0)

    const handleNextStep = useCallback(() => setActiveStep(x => x + 1), [setActiveStep])

    const authUser = useSelector(authUserFilter)

    const [getCarrier, carriers, getCarrierError] = useGetCarrier(handleNextStep)
    const [addCarrier, , addCarrierError] = useAddCarrier(handleNextStep)
    const [getDriver, drivers, getDriverError] = useGetDriver(handleNextStep)
    const [addDriver, , addDriverError] = useAddDriver(handleNextStep)
    const [addOutTtn, , errorAddOutTtn] = useAddTtnOut(handleNextStep)

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
        createTtn={addOutTtn}
        createTtnError={errorAddOutTtn}
        carriers={carriers}
        drivers={drivers}
        authUser={authUser}
    />
}