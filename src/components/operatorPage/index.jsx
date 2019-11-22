import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import StepperPage from './stepperPage'
import {
    useAddCarrier,
    useAddDriver,
    useAddTtn,
    useGetCarrier,
    useGetDriver,
    useGetServices,
    useGetTtnImportOrder
} from '../../api/apiRequests'
import {authUserFilter} from '../../filters'
import findSwal from '../swal/findSwal'

export default () => {
    const [activeStep, setActiveStep] = useState(0)

    const handleNextStep = () => {
        setActiveStep(activeStep + 1)
        findSwal()
    }

    const handleResetForm = (e) => {
        setActiveStep(e)
    }

    const authUser = useSelector(authUserFilter)

    const [getCarrier, carriers, getCarrierError] = useGetCarrier(handleNextStep)
    const [addCarrier, , addCarrierError] = useAddCarrier(handleNextStep)
    const [getDriver, drivers, getDriverError] = useGetDriver(handleNextStep)
    const [addDriver, , addDriverError] = useAddDriver(handleNextStep)
    const [addTtn, , addTtnError] = useAddTtn(handleNextStep)
    const [getServices, services] = useGetServices()
    const [getOrderTtn, orders, errorGetOrderTtn] = useGetTtnImportOrder(handleNextStep)

    useEffect(() => {
        getServices()
    }, [])

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
        carriers={carriers}
        drivers={drivers}
        authUser={authUser}
        services={services}
        searchOrder={getOrderTtn}
        searchOrderError={errorGetOrderTtn}
        orders={orders}
        handleResetForm={handleResetForm}
    />
}