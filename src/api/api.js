import server from '../config/server-config'
import axios from 'axios'

export const GET = 'GET'
export const POST = 'POST'
export const DELETE='DELETE'

const api = (action_type, url, dispatch, method, body) => {
    return axios({method: method, url: server + url, data: body})
        .then(res => {
            dispatch({
                type: action_type,
                payload: res.data
            })
        })
}

export const get = (url, action_type) => dispatch => (url_args = '') =>
    api(action_type, url + url_args, dispatch, GET)

export const post = (url, action_type) => dispatch => (data, url_args = '') =>
    api(action_type, url + url_args, dispatch, POST, data)

export default (url, singularAction, pluralAction) => {
    return {
        add: post(url, singularAction),
        getAll: get(url, pluralAction),
        get: get(url, singularAction),
        edit: post(url, singularAction)
    }
}
