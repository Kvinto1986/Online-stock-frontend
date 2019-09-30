import axios from 'axios';
import server from "../serverConfig";
import {TTN, SET_ERRORS} from './types';

export const findTTNbyNumber = (number, dndIsShown, calculateAreaFlag) => dispatch => {
    axios.post(`${server}api/ttn/findTTNbyNumber`, {...number, calculateAreaFlag})
    .then(result => {
        if (result) {
            dispatch({
                type: TTN,
                payload: result.data
            });
            dndIsShown(true)
        }
        else {
            dispatch({
                type: SET_ERRORS,
                payload: {warehouseTtn: "TTN not found"}
            });
            dndIsShown(false)
        }
    })
    .catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: {warehouseTtn: "TTN not found"}
        });
        dndIsShown(false)
    })
}