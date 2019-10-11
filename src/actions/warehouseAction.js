import axios from 'axios';
import {SET_ERRORS} from './types';
import server from '../serverConfig';

export const registerWarehouse = (warehouse, reset,unlock) => dispatch => {
    axios.post(`${server}api/warehouses/`, warehouse)
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

export const deleteWarehouse = (id) => dispatch => {
    axios.delete(`${server}api/warehouses/${id}`)
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
