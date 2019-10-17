import axios from 'axios'
import {SET_ERRORS} from './types'
import server from '../serverConfig'

export const warehousingPostData = (data, successWirehousingAletrt) => dispatch => { 
    axios
    .post(`${server}api/managers/finishWarehausing`, data)
    .then(res => {
        successWirehousingAletrt()
    })
    .catch(err => {
        if (err.response) {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        }
    })   
}
