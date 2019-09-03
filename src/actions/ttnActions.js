import axios from 'axios';
import server from "../serverConfig";
import {FETCH_TTN_BY_NUMBER, SET_ERRORS} from './types';

export const findTTNbyNumber = (number, dndIsShown) => dispatch => {
    axios.post(`${server}api/ttn/findTTNbyNumber`, number)
    .then(result => {
        if (result) {
            dispatch({
                type: FETCH_TTN_BY_NUMBER,
                payload: result.data
            });
            dndIsShown(true)
        }
        else {
            dispatch({
                type: GET_ERRORS,
                payload: {warehouseTtn: "TTN not found"}
            });
            dndIsShown(false)
        }
    })
    .catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        });
        dndIsShown(false)
    })
}