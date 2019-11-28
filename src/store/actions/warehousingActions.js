import axios from 'axios'
import {SET_ERRORS} from './types'
import server from '../../config/server-config'

export const warehousingPostData = (data, successWirehousingAletrt) => dispatch => {
    axios
    .post(`${server}api/managers/finishWarehausing`, data)
    .then(successWirehousingAletrt)
    .catch(err => {
        if (err.response) {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        }
    })
};
