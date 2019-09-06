import {EMPLOYEES} from "../actions/types";

const initialState= []

export default (state = initialState, action) => {
    switch (action.type) {
        case EMPLOYEES:
            return action.payload
        default:
            return state
    }
}