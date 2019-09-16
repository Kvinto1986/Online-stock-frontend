import React, { useState, useEffect } from 'react'
import { useApiCallback, useStorelessApiCallback } from "../../hooks/hook";
import { getAllSenders } from "../../api/senders";
import { getAllTransporters } from "../../api/transportes";
import { getTtn, finishStockDelivery } from "../../api/ttns"
import Form from "./deliveryFromStockForm";
import { senders, carriers, ttns } from "../../filters"
import { useSelector } from "react-redux"

export default () => {
    const [alertMessage, saveAlertMessage] = useState(null)
    const senderList = Object.values(useSelector(senders));
    const carrierList = Object.values(useSelector(carriers));
    const ttnData = useSelector(ttns);
    const managerData = useSelector(state=>state.auth.user);
    const [fetchSenders] = useApiCallback(getAllSenders, () => {}, {})
    const [fetchTransporters] = useApiCallback(getAllTransporters, () => {}, {})
    const [fetchTtnDataByNumber, numberError] = useApiCallback(getTtn, () => {}, {})
    const [handleSubmit, submitErrors] = useStorelessApiCallback(finishStockDelivery, res => outputAlert(res), {})

    // TODO: Put this logic into Form component
    const outputAlert = (res) => {

        saveAlertMessage(res.data.message)
        
        setTimeout(() => {
            // resetForm()
            saveAlertMessage(null)
        }, 2000)
    }

    useEffect(() => {
        fetchSenders()
        fetchTransporters()
    }, [])
    
    console.log(numberError);

    return (
        <Form
            senderList={senderList}
            carrierList={carrierList}
            fetchTtnData={fetchTtnDataByNumber}
            ttnData={ttnData}
            managerData={managerData}
            handleSubmit={handleSubmit}
            numberError={numberError}
            submitErrors={submitErrors}
            alertMessage={alertMessage}
        />
    )
};



