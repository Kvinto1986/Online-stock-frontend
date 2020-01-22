import axios from 'axios'
import {SET_ERRORS, TTNS_EXPORT, TTN_DATEOUT} from './types'
import server from '../serverConfig'

export const getExportTTN = () => dispatch => {
    axios
    .post(`${server}api/ttns/inboxOut`, {now: new Date()})
    .then(res => {
        dispatch({
            type: TTNS_EXPORT,
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

export const getTTNdateOut = (clientDate, substractedHoursAmount) => dispatch => {
    axios
    .post(`${server}api/ttns/contentOut`, {clientDate, substractedHoursAmount})
    .then(res => {
        dispatch({
            type: TTN_DATEOUT,
            payload: {
                data: res.data,
                HOUR_FLAG: substractedHoursAmount
            }
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

export const sortTasks = (data) => dispatch => {
    axios
    .post(`${server}api/ttnExportOrders/sortTasks`, data)
    .then(res => {
        dispatch({
            type: TTN_DATEOUT,
            payload: {
                data: res.data.response,
                isDesc: res.data.isDesc
            }
        })
    }) 
}
