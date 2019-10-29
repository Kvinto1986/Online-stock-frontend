import React from 'react'
import {useGetTtn, useEditTtn} from '../../api/apiRequests'
import CheckPage from './checkTtnPage'

export default () => {

    const [getTtn,ttns, getTtnError] = useGetTtn()
    const [editTtn, , editTtnError] = useEditTtn()
    const [deleteTtn, , deleteTtnError] = useEditTtn()

    return <CheckPage
        searchTtn={getTtn}
        ttns={ttns}
        getTtnError={getTtnError}
        editTtn={editTtn}
        editTtnError={editTtnError}
        deleteTtn={deleteTtn}
        deleteTtnError={deleteTtnError}
    />
}