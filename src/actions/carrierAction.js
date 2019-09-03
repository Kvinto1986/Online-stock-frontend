import {SET_ERRORS, PREV_PATH} from "./types";
import axios from "axios";
import server from "../serverConfig";

export const addPrevPath = (prevPath) => dispatch => {
    dispatch({
        type: PREV_PATH,
        payload: prevPath
    })
};

export const searchCarrier = (carrier, history) => dispatch => {
    const{passport} = carrier;
    axios.get(`${server}api/carriers/${passport}`)
        .then((res) => {
            dispatch({
                type:SET_ERRORS,
                payload: {}
            })
            if(res.data._id ) {
                history.push('/addTtn')
            } else {
                history.push('/addCarrier')
            }
        })
        .catch((err) => {
            dispatch({
                type:SET_ERRORS,
                payload: {carrier:`This field musn't be empty`}
            })
        })
};