import { TTN_DATEOUT } from '../actions/types'

export default (state = {}, action ) => {
    switch(action.type) {
        case TTN_DATEOUT:
            return action.payload
        default:
            return state
    }
}