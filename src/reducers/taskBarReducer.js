import { TTNS_EXPORT, TTN_DATEOUT } from '../actions/types'

export default (state = {}, action ) => {
    switch(action.type) {
        case TTNS_EXPORT: 
            return {
                ...state,
                barData: action.payload
            }
        case TTN_DATEOUT:
            return {
                ...state,
                contentData: action.payload
            }
        default:
            return state
    }
}