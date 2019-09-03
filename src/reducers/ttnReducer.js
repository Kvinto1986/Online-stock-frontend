import { FETCH_TTN_BY_NUMBER } from '../actions/types';

const initialState = {};

export default function(state = initialState, action ) {
    switch(action.type) {
        case FETCH_TTN_BY_NUMBER: {
            return action.payload;
        }
        default:
            return state;
    }
}