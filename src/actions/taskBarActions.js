import axios from 'axios'
import {SET_ERRORS, TTN_DATEOUT} from './types'
import server from '../serverConfig'

export const getTTNdateOut = () => dispatch => {
    axios
    .get(`${server}api/ttns/dataOut`)
    .then(res => {
        dispatch({
            type: TTN_DATEOUT,
            payload: res.data
        })
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