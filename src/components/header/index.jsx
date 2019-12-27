import React, {useCallback, useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {logoutUser} from '../../actions/authenticationAction'
import NavigationBar from './headerPage'
import {authUser} from '../../filters'

export default () => {
    const dispatch = useDispatch()
    const user = useSelector(authUser)
    const logout = useCallback(logoutUser(dispatch),[dispatch])
    const [screenSize, setSize] = useState(0)

    function updateSize() {
        setSize(window.innerWidth)
    }

    useEffect(() => {
        setSize(window.innerWidth)
    });

    window.addEventListener('resize', updateSize);

    return (
        <NavigationBar
            screenSize={screenSize}
            user={user}
            logout={logout}
        />
    )
}
