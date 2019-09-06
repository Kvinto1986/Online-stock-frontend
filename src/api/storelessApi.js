import server from '../serverConfig'
import axios from 'axios'
import {POST} from './api'

const api = (url, body) => axios({method: POST, url: server + url, data: body})

export const post = url => (body, url_args = '') => {
    return api(url + url_args, body)
}

export default url => {
    return {
        add: post(url),
        edit: post(url)
    }
}