import React from 'react'
import {useGetTtn, useEditTtn} from '../../api/apiRequests'
import CheckPage from './checkTtnPage'

export default () => {

    const [getTtn,ttns, getTtnError] = useGetTtn()
    const [deleteTtn] = useEditTtn()

    return <CheckPage
        searchTtn={getTtn}
        ttns={ttns}
        getTtnError={getTtnError}
        deleteTtn={deleteTtn}
    />
}