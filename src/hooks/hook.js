import {useDispatch} from 'react-redux'
import React, {useCallback, useState} from "react";

export function useApiCallback(apiCallback, initData, initError) {

    const dispatch = useDispatch()
    const [errors, setErrors] = useState(initData)
    const [data, setData] = useState(initError)
    const callback = useCallback((...args) => apiCallback(dispatch)(...args)
        .then(({response: {data}}) => setData(data))
        .catch(({response: {data}}) => setErrors(data)), [dispatch]
    )

    return [callback, data, errors]
}