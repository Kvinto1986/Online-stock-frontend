import {TTN} from '../actions/types'

const initialState = {}
export default function(state = initialState, action ) {
    switch(action.type) {
        case TTN :
            return action.payload;
        default:
            return state;
    }
}