import axios from 'axios';
import server from "../serverConfig";
import {FETCH_TTN_BY_NUMBER, GET_ERRORS} from './types';

export const findTTNbyNumber = (number) => dispatch => {
    return axios.post(`${server}api/ttn/findTTNbyNumber`, number)
    .then(result => {
        console.log(result);
        
        if (result) {
            dispatch({
                type: FETCH_TTN_BY_NUMBER,
                payload: result.data
            });
            return Promise.resolve(true)
        }
        else {
            return Promise.reject(false)
        }
    })
    .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    })
}