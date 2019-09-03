import axios from 'axios';
import {SET_ERRORS, GET_CURRENT_WAREHOUSES} from './types';
import server from '../serverConfig';

export const registerWarehouse = (warehouse, reset,unlock) => dispatch => {
    axios.post(`${server}api/warehouses/registration`, warehouse)
        .then(() => {
            reset();
            dispatch({
                type: SET_ERRORS,
                payload: {}
            });
        })
        .catch(err => {
            if (err.response) {
                unlock()
                dispatch({
                    type: SET_ERRORS,
                    payload: err.response.data
                });
            }
        });
};

export const getWarehouses = () => dispatch => {
    axios.get(`${server}api/warehouses/`)
        .then(res => {
            dispatch({
                type: GET_CURRENT_WAREHOUSES,
                payload: res.data
            });
        })
        .then(() => {
            dispatch({
                type: SET_ERRORS,
                payload: {}
            });
        })
        .catch(err => {
            if (err.response) {
                dispatch({
                    type: SET_ERRORS,
                    payload: err.response.data
                });
            }
        });
};

export const deleteWarehouse = (id) => dispatch => {
    axios.post(`${server}api/warehouses/delete`,id)
        .then(() => {
            dispatch({
                type: SET_ERRORS,
                payload: {}
            });
        })
        .catch(err => {
            if (err.response) {
                dispatch({
                    type: SET_ERRORS,
                    payload: err.response.data
                });
            }
        });
};
