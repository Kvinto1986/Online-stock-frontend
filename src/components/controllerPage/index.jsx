import React from 'react'
import ControlTTNPage from './controlTTNpage'
import {useGetTtn, useEditTtn} from '../../api/apiRequests'
import {useReset} from '../../hooks/hook'
import successSwal from '../warehousesPage/successSwal'

export default () => {
    const [keyPage, resetKey] = useReset()

    const handleResetForm = () => {
        successSwal(resetKey, 'TTN successfully save')
    }

    const [getTtn, ttns, getTtnError] = useGetTtn()
    const [editTtn] = useEditTtn(handleResetForm)

    return <ControlTTNPage
        key={keyPage}
        ttns={ttns}
        getTtn={getTtn}
        getTtnError={getTtnError}
        editTtn={editTtn}
    />
}