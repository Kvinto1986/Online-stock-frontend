import {useDispatch} from 'react-redux'
import {useCallback, useState} from 'react'

export function useApiCallback(apiCallback, reset, initError) {
    console.log('useApiCallback is deprecated')
    const dispatch = useDispatch()
    const [errors, setErrors] = useState(initError)
    const callback = useCallback((...args) => apiCallback(dispatch)(...args)
        .then(reset)
        .catch(({errors}) => setErrors(errors)), [])

    return [callback, errors]
}

export function useStorelessApiCallback(apiCallback, reset, initError) {
    console.log('useStorelessApiCallback is deprecated')
    const [errors, setErrors] = useState(initError)
    const callback = useCallback((...args) => apiCallback(...args)
        .then(reset)
        .catch(({response: errors}) => setErrors(errors.data)), [])

    return [callback, errors]
}

/**
 * Allow to remount any component.
 * Put key as an argument to component you want to reload.
 * Call reset() when you want ro remount component.
 *
 * Example:
 *  const [key, reset] = useReset()
 *
 *  return <SomeForm key={key} onSubmit={reset}/>
 *
 *  That "SomeForm" will be remounted when someone will submit the form.
 *  Example is not useful. It's just shows how it's works.
 */
export function useReset() {
    const [counter, setCounter] = useState(0)
    const key = '_resetable_' + counter
    const reset = () => setCounter(counter + 1)
    return [key, reset]
}