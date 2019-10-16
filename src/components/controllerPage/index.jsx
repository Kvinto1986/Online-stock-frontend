import React from 'react'
import СontrolTTNPage from './controlTTNpage'
import {useGetTtn, useEditTtn} from '../../api/apiRequests'
import {useReset} from '../../hooks/hook'
import successSwal from '../warehousesPage/successSwal'

export default () => {
    const [keyPage, resetKey] = useReset()

    const handleResetForm = () => {
        successSwal(resetKey, 'TTN successfully save')
    }

    const [getTtn, ttn, getTtnError] = useGetTtn()
    const [editTtn, ,] = useEditTtn(handleResetForm)

    return <СontrolTTNPage
        key={keyPage}
        ttn={ttn}
        getTtn={getTtn}
        getTtnError={getTtnError}
        editTtn={editTtn}
    />
}