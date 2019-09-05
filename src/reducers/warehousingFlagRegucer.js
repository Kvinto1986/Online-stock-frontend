import { SET_WAREHOUSING_STATUS_FLAG } from '../actions/types';

const initialState = false;

export default function(state = initialState, action ) {
    switch(action.type) {
        case SET_WAREHOUSING_STATUS_FLAG :
            return action.payload;
        default:
            return state;
    }
}