import axios from 'axios';
import {FETCH_ALL_STOCKS, SET_WAREHOUSING_STATUS_FLAG, SET_ERRORS} from './types';
import server from '../serverConfig'

export const fetchAvailableStocks = () => dispatch => { 
    axios
    .get(`${server}api/warehouses/getAll`)
    .then(res => {
        dispatch({
            type: FETCH_ALL_STOCKS,
            payload: res.data
        });
    })
    .catch(err => {
        if (err.response) {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            });
        }
    })   
};

export const warehousingSubmit = flag => dispatch => {
    dispatch({
        type: SET_WAREHOUSING_STATUS_FLAG,
        payload: flag
    })
}
