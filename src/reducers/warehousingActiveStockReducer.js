import { SET_ACTIVE_WAREHOUSING_STOCK_DATA } from '../actions/types';

const initialState = '';

export default function(state = initialState, action ) {
    switch(action.type) {
        case SET_ACTIVE_WAREHOUSING_STOCK_DATA:
            return action.payload;
        default:
            return state;
    }
}