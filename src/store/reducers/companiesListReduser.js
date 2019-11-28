import { GET_CURRENT_COMPANIES_LIST } from '../actions/types';

const initialState = [];

export default function(state = initialState, action ) {
    switch(action.type) {
        case GET_CURRENT_COMPANIES_LIST :
            return action.payload;
        default:
            return state;
    }
}