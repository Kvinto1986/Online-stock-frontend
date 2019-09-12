import React, { useEffect, useState } from 'react'
import { useApiCallback, useStorelessApiCallback } from "../../hooks/hook";
import { getAllSenders } from "../../api/senders";
import { getAllTransporters } from "../../api/transportes";
import { getTtn } from "../../api/ttns"
import Form from "./deliveryFromStockForm";
import { senders, carriers, ttns } from "../../filters"
import { useSelector } from "react-redux"

export default () => {
    // const [number, setNumber] = useState('')
    
    const senderList = Object.values(useSelector(senders));
    const carrierList = Object.values(useSelector(carriers));
    const ttnData = useSelector(ttns);
    const managerName = useSelector(state=>state.auth.user.name);
    const [fetchSenders] = useApiCallback(getAllSenders, () => {}, {})
    const [fetchTransporters] = useApiCallback(getAllTransporters, () => {}, {})
    const [fetchTtnDataByNumber] = useApiCallback(getTtn, () => {}, {})
    // const [handleSubmit, errors] = useStorelessApiCallback(addEmployee, ()=>{},{})

    useEffect(() => {
        fetchSenders()
        fetchTransporters()
    }, [])

    return <Form
        senderList={senderList}
        carrierList={carrierList}
        fetchTtnData={fetchTtnDataByNumber}
        ttnData={ttnData}
        managerName={managerName}
        // handleSubmit={handleSubmit}
        // errors={errors}
    />
};



