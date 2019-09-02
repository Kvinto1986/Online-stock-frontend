import { GET_CURRENT_WAREHOUSES, FETCH_ALL_STOCKS } from '../actions/types';

const initialState = [];

export default function(state = initialState, action ) {
    switch(action.type) {
        case GET_CURRENT_WAREHOUSES :
            return action.payload;
        case FETCH_ALL_STOCKS: 
            return action.payload;
        default:
            return state;
    }
}