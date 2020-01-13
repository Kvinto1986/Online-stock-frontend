import LoginForm from './loginForm'
import {useDispatch, useSelector} from 'react-redux'
import React, {useCallback, useState} from 'react'
import {loginUser} from '../../actions/authenticationAction'
import {errors} from '../../filters'

export default () => {
    const dispatch = useDispatch()
    const error = useSelector(errors)

    const onSubmit = useCallback(
        user => loginUser(dispatch)(user)
        , [dispatch]
    )

    return <LoginForm
        onSubmit={onSubmit}
        errors={error}
    />
}
