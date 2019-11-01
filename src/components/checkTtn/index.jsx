import React, {useCallback} from 'react'
import {useGetTtn, useDelTtn} from '../../api/apiRequests'
import CheckPage from './checkTtnPage'
import {useReset} from '../../hooks/hook'
import successSwal from '../warehousesPage/successSwal'

export default () => {
    const [keyPage, resetKey] = useReset()

    const handleResetForm = useCallback(
        () => {
            successSwal(resetKey, 'TTN successfully deleted')
        },
        [resetKey],
    )

    const [getTtn, ttns, getTtnError] = useGetTtn()
    const [deleteTtn] = useDelTtn(handleResetForm)

    return <CheckPage
        key={keyPage}
        searchTtn={getTtn}
        ttns={ttns}
        getTtnError={getTtnError}
        deleteTtn={deleteTtn}
    />
}