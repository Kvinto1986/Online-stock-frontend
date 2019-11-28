import { SENDER, SENDERS } from '../actions/types'
const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case SENDERS:
            return payload
        case SENDER:
            return {...state, [payload.id]: payload}
        default:
            return state
    }
}