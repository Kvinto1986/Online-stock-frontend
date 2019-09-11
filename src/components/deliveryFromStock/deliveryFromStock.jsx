import React, { useEffect } from 'react'
import { useApiCallback, useStorelessApiCallback } from "../../hooks/hook";
import { getAllSenders } from "../../api/senders";
import {getAllTransporters} from "../../api/transportes";
import Form from './deliveryFromStockForm';
import { senders, carriers } from '../../filters'
import {useSelector} from "react-redux"

export default () => {
    const senderList = Object.values(useSelector(senders));
    const carrierList = Object.values(useSelector(carriers));
    const [fetchSenders] = useApiCallback(getAllSenders, () => {}, {})
    const [fetchTransporters] = useApiCallback(getAllTransporters, () => {}, {})
    // const [onSubmit,errors] = useStorelessApiCallback(addEmployee, ()=>{},{})
    
    useEffect(() => {
        fetchSenders()
        fetchTransporters()
    }, [])
    
    return <Form
        senderList={senderList}
        carrierList={carrierList}
        // onSubmit={onSubmit}
        // errors={errors}
    />
};



