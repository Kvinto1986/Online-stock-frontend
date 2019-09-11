import { SENDER, SENDERS } from '../actions/types'
import { normalize } from '../utils/utils'

const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case SENDERS:
            return payload.reduce(normalize('id'), {})
        case SENDER:
            return {...state, [payload.id]: payload}
        default:
            return state
    }
}