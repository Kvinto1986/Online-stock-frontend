import {GET_USERS_SUCCESS} from "../actions/types";

const initial = {}

export default (state = initial, action) => {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            return action.payload
        default:
            return state
    }
}