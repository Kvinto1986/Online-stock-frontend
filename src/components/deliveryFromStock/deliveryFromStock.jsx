import React, { useState, useEffect } from 'react'
import { useApiCallback, useStorelessApiCallback } from "../../hooks/hook";
import { getAllSenders } from "../../api/senders";
import { getAllTransporters } from "../../api/transportes";
import { editTTN } from "../../api/ttns"
import Form from "./deliveryFromStockForm";
import { senders, carriers } from "../../filters"
import { useSelector } from "react-redux"
import { findTtn } from '../../servies/ttn'

export default () => {
    const [alertMessage, saveAlertMessage] = useState(null)
    const senderList = Object.values(useSelector(senders));
    const carrierList = Object.values(useSelector(carriers));
    const managerData = useSelector(state=>state.auth.user);
    const [fetchSenders] = useApiCallback(getAllSenders, () => {}, {})
    const [fetchTransporters] = useApiCallback(getAllTransporters, () => {}, {})
    const [submitAction, submitErrors] = useStorelessApiCallback(editTTN, res => saveAlertMessage(res.data.message), {})

    useEffect(() => {
        fetchSenders()
        fetchTransporters()
    }, [])

    return (
        <Form
            senderList={senderList}
            carrierList={carrierList}
            fetchTtnData={findTtn}
            managerData={managerData}
            submitAction={submitAction}
            submitErrors={submitErrors}
            alertMessage={alertMessage}
            saveAlertMessage={saveAlertMessage}
        />
    )
};



