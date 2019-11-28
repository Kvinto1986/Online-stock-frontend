import { PREV_PATH } from '../actions/types';

const initialState = {
    prevPath: "/"
};

export default function(state = initialState, action ) {
    switch(action.type) {
        case PREV_PATH:
            return {...state, prevPath: action.payload};
        default:
            return state;
    }
}