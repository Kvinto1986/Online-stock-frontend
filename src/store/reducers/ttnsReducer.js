import {TTNS} from '../actions/types'

const initialState = {}
export default function(state = initialState, action ) {
    switch(action.type) {
        case TTNS :
            return action.payload;
        default:
            return state;
    }
}