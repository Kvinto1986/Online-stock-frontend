import axios from 'axios';
import server from "../../config/server-config";
import {TTN, SET_ERRORS} from './types';

export const findTTNbyNumber = (number, dndIsShown) => dispatch => {
    axios.get(`${server}api/ttns/${number}`)
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
