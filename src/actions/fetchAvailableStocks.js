import axios from 'axios';
import {FETCH_ALL_STOCKS, GET_ERRORS} from './types';
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
                type: GET_ERRORS,
                payload: err.response.data
            });
        }
    })   
};
