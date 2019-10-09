import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import StepperPage from './stepperPage'
import {useGetCarrier, useAddCarrier, useGetDriver, useAddDriver, useAddTtn} from '../../api/apiRequests'
import {carriersFilter, driversFilter, authUserFilter} from '../../filters'


export default () => {
    const [activeStep, setActiveStep] = useState(0)
    const [carrierId, setCarrierId] = useState('')
    const [driverId, setDriverId] = useState('')

    const handleNextStep = () => {
        setActiveStep(activeStep + 1)
    }

    const currentCarrier = useSelector(carriersFilter)
    const currentDriver = useSelector(driversFilter)
    const authUser = useSelector(authUserFilter)

    const [getCarrier, , getCarrierError] = useGetCarrier(handleNextStep)
    const [addCarrier, , addCarrierError] = useAddCarrier(handleNextStep)
    const [getDriver, , getDriverError] = useGetDriver(handleNextStep)
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
        currentCarrier={currentCarrier}
        currentDriver={currentDriver}
        authUser={authUser}
        carrierId={carrierId}
        setCarrierId={setCarrierId}
        driverId={driverId}
        setDriverId={setDriverId}
    />
};