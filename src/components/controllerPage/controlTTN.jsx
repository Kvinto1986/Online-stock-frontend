import React, {useEffect, useState} from 'react'
import СontrolTTNPage from './controlTTNpage'
import {useApiCallback} from '../../hooks/hook'
import {getTTNS,getTTN} from '../../api/TTN'
import {useSelector} from 'react-redux'
import {ttnsFilter, ttnFilter} from '../../filters'

export default () => {
    const ttnsList = useSelector(ttnsFilter)
    const selectedTtn = useSelector(ttnFilter)

    const [confirm, setConfirm] = useState(false)
    const [open, setOpen] = useState(false)

    const [getList] = useApiCallback(getTTNS, () => {
    }, {})

    const [getCurrentTTN] = useApiCallback(getTTN, () => {
    }, {})


    const findTTN = (req) => {
        getCurrentTTN(req.value)
    }

    useEffect(() => {
        getList()
    }, [])

    return <СontrolTTNPage
        ttnsList={ttnsList}
        selectedTtn={selectedTtn}
        findTTN={findTTN}
        confirm={confirm}
        setConfirm={setConfirm}
        open={open}
        setOpen={setOpen}
    />
};