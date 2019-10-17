import React, {useEffect} from 'react'
import {useGetTtn, useGetWarehouses, useGetEmployee} from '../../api/apiRequests'
import Warehousing from './warehousing'
import {warehousingPostData} from '../../actions/warehousingActions'
import {useDispatch, useSelector} from 'react-redux'
import {compose} from 'ramda'

export default () => {
    const dispatch = useDispatch()
    const makeWarehousing = compose(dispatch, warehousingPostData)
    const user = useSelector(state => state.auth.user)

    const [getTtn, ttn, ttnError] = useGetTtn()
    const [getEmployee, currentManager] = useGetEmployee()
    const [getWarehouses, warehouses] = useGetWarehouses()

    useEffect(() => {
        getEmployee()
        getWarehouses()
    }, [getEmployee, getWarehouses])
    
    return (
        <Warehousing
            getTtn={getTtn}
            ttnError={ttnError}
            ttn={ttn}
            warehouses={warehouses}
            currentManager={currentManager}
            makeWarehousing={makeWarehousing}
            user={user}
        />
    )
} 

