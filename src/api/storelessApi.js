import server from '../serverConfig'
import axios from 'axios'
import {POST, DELETE} from './api'

const api = (url, body, method) => axios({method: method, url: server + url, data: body})

export const post = url => (body, url_args = '') => {
    return api(url + url_args, body, POST)
}

export const del = url => (id) => {
    return api(url + id,{}, DELETE)
}

export default url => {
    return {
        add: post(url),
        edit: post(url),
        delete: del(url)
    }
}