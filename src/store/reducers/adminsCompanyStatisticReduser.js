import { GET_CURRENT_STATISTIC } from '../actions/types';

const initialState = {};

export default function(state = initialState, action ) {
    switch(action.type) {
        case GET_CURRENT_STATISTIC:
            return action.payload;
        default:
            return state;
    }
}