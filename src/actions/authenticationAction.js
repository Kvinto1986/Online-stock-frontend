import axios from 'axios';
import {SET_ERRORS, SET_CURRENT_USER} from './types';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../setAuthToken'
import server from '../serverConfig'

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
};

export const loginUser = dispatch => user =>
    axios.post(`${server}api/login/`, user)
        .then(res => {
            const {token} = res.data;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
            dispatch({
                type: SET_ERRORS,
                payload: {}
            });
        });


export const logoutUser = dispatch => () => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    dispatch({
        type: SET_ERRORS,
        payload: {}
    });
};