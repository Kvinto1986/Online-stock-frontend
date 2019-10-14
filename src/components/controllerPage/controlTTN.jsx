import React from 'react'
import СontrolTTNPage from './controlTTNpage'

import {useGetTtn,useEditTtn} from '../../api/apiRequests'

export default () => {

    const [getTtn, ttn, getTtnError] = useGetTtn()
    const [editTtn, , editTtnError] = useEditTtn()

    return <СontrolTTNPage
        ttn={ttn}
        editCurrentTTN={editTtn}
        getTtnError={getTtnError}
        getTtn={getTtn}
    />
}