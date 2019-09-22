import React, {useEffect, useState} from 'react'
import СontrolTTNPage from './controlTTNpage'
import {useApiCallback,useStorelessApiCallback} from '../../hooks/hook'
import {getTTNS, getTTN,editTTN} from '../../api/TTN'
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


    const [editCurrentTTN] = useStorelessApiCallback(editTTN, () => {
    }, {})

    const [report, setReport] = useState('')

    const [currentTTN, setRawCurrentTTN] = useState({})

    const setCurrentTTN = obj => {
        setRawCurrentTTN({...obj, products: [...obj.products.map(x => ({...x}))]})
    }

    const findTTN = (ttn) => {
        getCurrentTTN(ttn.value)
        setReport('')
    }

    useEffect(() => {
        getList()
    }, [])

    return <СontrolTTNPage
        editCurrentTTN={editCurrentTTN}
        currentTTN={currentTTN}
        setCurrentTTN={setCurrentTTN}
        report={report}
        setReport={setReport}
        ttnsList={ttnsList}
        selectedTtn={selectedTtn}
        findTTN={findTTN}
    />
};