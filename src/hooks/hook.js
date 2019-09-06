import {useDispatch} from 'react-redux'
import React, {useCallback, useState} from 'react'

export function useApiCallback(apiCallback, reset, initError) {
    const dispatch = useDispatch()
    const [errors, setErrors] = useState(initError)
    const callback = useCallback((...args) => apiCallback(dispatch)(...args)
        .then(reset)
        .catch(({errors}) => setErrors(errors)), [])

    return [callback, errors]
}

export function useStorelessApiCallback(apiCallback, reset, initError) {
    const [errors, setErrors] = useState(initError)
    const callback = useCallback((...args) => apiCallback(...args)
        .then(reset)
        .catch(({response: errors}) => setErrors(errors.data)), [])

    return [callback, errors]
}