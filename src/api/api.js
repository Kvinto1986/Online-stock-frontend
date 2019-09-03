import server from '../serverConfig'

export const GET = 'GET'
export const POST = 'POST'

const api = (action_type, url, dispatch, data) => {
    dispatch({type: action_type + '_REQUEST'})
    fetch(server + url, data)
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: action_type + '_SUCCESS',
                data: json
            })
        })
}

const METHOD_GET = {method: GET}

export const get = (action_type, url) => dispatch => (url_args = '') =>
    api(action_type, url + url_args, dispatch, METHOD_GET)

export const post = (action_type, url) => dispatch => (data, url_args = '') =>
    api(action_type, url + url_args, dispatch, {method: POST, ...data})

export default (url, singularAction, pluralAction) => {
    return {
        add: post(url, 'ADD_' + singularAction),
        getAll: get(url, 'GET_' + pluralAction),
        get: get(url, 'GET_' + singularAction),
        edit: get(url, 'EDIT_' + singularAction)
    }
}