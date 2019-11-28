import React, {useEffect} from 'react'
import {useGetTtn, useGetWarehouses} from '../../api/apiRequests'
import Warehousing from './warehousing'
import {warehousingPostData} from '../../store/actions/warehousingActions'
import {useDispatch, useSelector} from 'react-redux'
import {compose} from 'ramda'
import {authUser} from '../../store/filters'
import {useReset} from '../../hooks/hook'

export default () => {
    const dispatch = useDispatch()
    const makeWarehousing = compose(dispatch, warehousingPostData)
    const user = useSelector(authUser)
    const [key, reset] = useReset()

    const [getTtn, ttns, ttnError] = useGetTtn()
    const [getWarehouses, warehouses] = useGetWarehouses()

    useEffect(() => {
        getWarehouses()
    }, [getWarehouses])

    return (
        <Warehousing
            getTtn={getTtn}
            ttnError={ttnError}
            ttns={ttns}
            warehouses={warehouses}
            makeWarehousing={makeWarehousing}
            user={user}
            key={key}
            reset={reset}
        />
    )
}

