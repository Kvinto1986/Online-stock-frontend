import axios from 'axios';
import {GET_CURRENT_STATISTIC, SET_ERRORS, GET_CURRENT_COMPANIES_LIST, GET_CURRENT_COMPANY} from './types';
import server from '../serverConfig'

export const registerAdmin = (admin, reset) => dispatch => {
    axios.post(`${server}api/companyadmins/registration`, admin)
        .then(() => {
            reset();
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

export const getStatistic = (date) => dispatch => {
    axios.post(`${server}api/companyAdminsStatistic/`, date)
        .then(res => {
            dispatch({
                type: GET_CURRENT_STATISTIC,
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

export const getCompaniesList = () => dispatch => {
    axios.get(`${server}api/companyadmins/`)
        .then(res => {
            dispatch({
                type: GET_CURRENT_COMPANIES_LIST,
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

export const getCompany = (company) => dispatch => {
    axios.get(`${server}api/companyAdmins/${company}`)
        .then(res => {
            dispatch({
                type: GET_CURRENT_COMPANY,
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

export const changeStatus = (id,data) => {
    axios.post(`${server}api/companyAdmins/${id}`, data)
        .then(()=> {
        })
};