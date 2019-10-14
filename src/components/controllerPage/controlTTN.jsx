import React from 'react'
import СontrolTTNPage from './controlTTNpage'

import {useGetTtn, useEditTtn} from '../../api/apiRequests'

export default () => {
    const [getTtn, ttn, getTtnError] = useGetTtn()
    const [editTtn, , editTtnError] = useEditTtn()

    return <СontrolTTNPage
        getTtn={getTtn}
        getTtnError={getTtnError}
        editTtn={editTtn}
        editTtnError={editTtnError}
        ttn={ttn}
    />
}