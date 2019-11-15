import React, {useCallback} from 'react'
import ControlTTNPage from './controlTTNpage'
import {useGetTtn, useEditTtn} from '../../api/apiRequests'
import {useReset} from '../../hooks/hook'
import successSwal from '../warehousesPage/successSwal'
import {authUser} from '../../filters' 
import {useSelector} from 'react-redux'

export default () => {
    const [keyPage, resetKey] = useReset()

    const handleResetForm = useCallback(
        () => {
            successSwal(resetKey, 'TTN successfully save')
        },
        [resetKey],
    )

    const [getTtn, ttns, getTtnError] = useGetTtn()
    const [editTtn] = useEditTtn(handleResetForm)
    const user = useSelector(authUser)

    return <ControlTTNPage
        key={keyPage}
        ttns={ttns}
        getTtn={getTtn}
        getTtnError={getTtnError}
        editTtn={editTtn}
        user={user}
    />
}