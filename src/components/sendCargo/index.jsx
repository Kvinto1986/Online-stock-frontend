import React, {useCallback, useState} from 'react'
import {useSelector} from 'react-redux'
import StepperPage from './stepperPage'
import {
    useAddCarrier,
    useAddDriver,
    useAddTtnOut,
    useGetCarrier,
    useGetDriver,
    useGetTtnOrder
} from '../../api/apiRequests'
import {authUserFilter} from '../../filters'
import findSwal from '../operatorPage/findSwal'


export default () => {
    const [activeStep, setActiveStep] = useState(0)

    const handleNextStep = useCallback(() => {
        setActiveStep(x => x + 1)
        findSwal()
    }, [setActiveStep])

    const handleResetForm = (e) => {
        window.location.reload()
        setActiveStep(e)
    }

    const authUser = useSelector(authUserFilter)

    const [getCarrier, carriers, getCarrierError] = useGetCarrier(handleNextStep)
    const [addCarrier, , addCarrierError] = useAddCarrier(handleNextStep)
    const [getDriver, drivers, getDriverError] = useGetDriver(handleNextStep)
    const [addDriver, , addDriverError] = useAddDriver(handleNextStep)
    const [addOutTtn, , errorAddOutTtn] = useAddTtnOut(handleNextStep)
    const [getOrderTtn, orders, errorGetOrderTtn] = useGetTtnOrder(handleNextStep)


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
        searchOrder={getOrderTtn}
        searchOrderError={errorGetOrderTtn}
        orders={orders}
        handleResetForm={handleResetForm}
    />
}