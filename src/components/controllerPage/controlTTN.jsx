import React, {useEffect} from 'react'
import СontrolTTNPage from './controlTTNpage'
import {useApiCallback} from '../../hooks/hook'
import {getTTNS,getTTN} from '../../api/TTN'
import {useSelector} from 'react-redux'
import {ttnsFilter, ttnFilter} from '../../filters'


export default () => {
    const ttnsList = useSelector(ttnsFilter)
    const selectedTtn = useSelector(ttnFilter)

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
    />
};