import axios from 'axios';
import {
    FETCH_ALL_STOCKS, 
    SET_WAREHOUSING_STATUS_FLAG, 
    SET_ERRORS,
    SET_ACTIVE_WAREHOUSING_STOCK_DATA
} from './types';
import server from '../serverConfig'

export const fetchAvailableStocks = () => dispatch => { 
    axios
    .get(`${server}api/warehouses/`)
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

export const setActiveWarehousingStockData = data => dispatch => {
    dispatch({
        type: SET_ACTIVE_WAREHOUSING_STOCK_DATA,
        payload: data
    })
}

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
            });
        }
    })   
};
