import axios from 'axios'
import {SET_ERRORS} from './types'
import server from '../serverConfig'

export const registerEmployee = (user, reset) => dispatch => {
    axios.post(`${server}api/employee/`, user)
        .then(() => {
            reset()
            dispatch({
                type: SET_ERRORS,
                payload: {}
            })
        })
}

