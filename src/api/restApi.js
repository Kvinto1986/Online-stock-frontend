import {useCallback, useState} from 'react'
import server from '../config/server-config'
import * as axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import qs from 'querystring'

export const GET = 'GET'
export const POST = 'POST'
export const DELETE = 'DELETE'


const apiRequest = (type, url, dispatch, method, args, data, params = '') =>
    axios({method, url: `${server}api/${url}/${args}${params}`, data})
        .then(({data}) => {
            dispatch({type, data})
        })

export const getAll = (actionType, url) => (params = {}) => dispatch =>
    apiRequest(actionType, url, dispatch, GET, '', {}, qs.stringify(params))

export const getOne = (actionType, url) => id => dispatch =>
    apiRequest(actionType, url, dispatch, GET, id)

export const del = (actionType, url) => id => dispatch =>
    apiRequest(actionType, url, dispatch, DELETE, id)

export const add = (actionType, url) => data => dispatch =>
    apiRequest(actionType, url, dispatch, POST, '', data)

export const edit = (actionType, url) => (data, id) => dispatch =>
    apiRequest(actionType, url, dispatch, POST, id, data)

export const createApiHook = (request, selector) => onSuccess => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const data = useSelector(selector)
    const [errors, setErrors] = useState({})
    const cb = useCallback((...args) => {
            console.log('use callback')
            setLoading(true)
            request(...args)(dispatch)
                .then(x => {
                    onSuccess && onSuccess(x)
                    return x
                })
                .catch(({response: {data}}) => setErrors(data))
                .finally(() => setLoading(false))
        },
        [dispatch, onSuccess]
    )

    return [cb, data, errors, loading]
}

const ucFirst = str => str[0].toUpperCase() + str.slice(1).toLowerCase()

const toCamelCase = str => {
    const split = str.split('_')
    const modified = split.map(ucFirst)
    return modified.join('')
}

export function createRestHooks(singular, plural, selector) {
    const pluralCamel = toCamelCase(plural)
    const url = pluralCamel[0].toLowerCase() + pluralCamel.slice(1)
    const singularName = toCamelCase(singular)
    const pluralName = toCamelCase(plural)
    return {
        ['useGet' + singularName]: createApiHook(getOne(singular, url), selector),
        ['useEdit' + singularName]: createApiHook(edit(singular, url), selector),
        ['useDel' + singularName]: createApiHook(del(`DELETE_${singular}`, url), selector),
        ['useGet' + pluralName]: createApiHook(getAll(plural, url), selector),
        ['useAdd' + singularName]: createApiHook(add(singular, url), selector),
    }
}
