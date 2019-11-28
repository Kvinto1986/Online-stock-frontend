import React, {useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {logoutUser} from '../../store/actions/authenticationAction'
import NavigationBar from './headerPage'
import {authUser} from '../../store/filters'

export default () => {
    const dispatch = useDispatch()
    const user = useSelector(authUser)
    const logout = useCallback(logoutUser(dispatch),[dispatch])

    return (
        <NavigationBar
            user={user}
            logout={logout}
        />

    )
}
