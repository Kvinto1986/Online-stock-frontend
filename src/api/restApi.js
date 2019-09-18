import {useCallback, useState} from 'react'
import server from '../serverConfig'
import * as axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'

export const GET = 'GET'
export const POST = 'POST'
export const DELETE = 'DELETE'


const apiRequest = (type, url, arg, dispatch, method, data) =>
    axios({method, url: `${server}api/${url}/${arg}`, data})
        .then(({data}) => {
            dispatch({type, data})
        })

export const get = (action_type, url) => (url_args = '') => dispatch =>
    apiRequest(action_type, url, url_args, dispatch, GET)

export const del = (action_type, url) => (url_args = '') => dispatch =>
    apiRequest(action_type, url, url_args, dispatch, DELETE)

export const post = (action_type, url) => (data, url_args = '') => dispatch =>
    apiRequest(action_type, url, url_args, dispatch, POST, data)

const doNothing = x => {}

export const createApiHook = (request, selector) => (onSuccess = doNothing) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const data = useSelector(selector)
    const [errors, setErrors] = useState({})
    const cb = useCallback((...args) => {
            console.log('use callback')
            setLoading(true)
            request(...args)(dispatch)
                .then(onSuccess)
                .catch(({response:{data}}) => setErrors(data))
                .finally(() => setLoading(false))
        },
        [dispatch, onSuccess]
    )

    return [cb, data, errors, loading]
}

function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase()
}

export function createRestHooks(singular, plural, selector) {
    const url = plural.toLowerCase()
    const singularName = ucFirst(singular)
    const pluralName = ucFirst(plural)
    return {
        ['useGet' + singularName]: createApiHook(get(singular, url), selector),
        ['useEdit' + singularName]: createApiHook(post(singular, url), selector),
        ['useDel' + singularName]: createApiHook(del(`DELETE_${singular}`, url), selector),
        ['useGet' + pluralName]: createApiHook(() => get(plural, url)(), selector),
        ['useAdd' + singularName]: createApiHook((data) => post(singular, url)(data), selector),
    }
}