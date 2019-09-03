import LoginForm from './loginForm'
import {useDispatch} from 'react-redux'
import React, {useCallback, useState} from "react";
import {loginUser} from "../../actions/authenticationAction";

export default () => {
    const dispatch = useDispatch()
    const [errors, setErrors] = useState({})
    const onSubmit = useCallback(
        user => loginUser(dispatch)(user).catch(
            ({response: {data}}) => {
                setErrors(data)
            }
        ),
        [dispatch])
    return <LoginForm
        onSubmit={onSubmit}
        errors={errors}
    />
}