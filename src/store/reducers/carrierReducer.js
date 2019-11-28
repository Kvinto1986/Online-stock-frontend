import { CARRIER, CARRIERS } from '../actions/types'
import { normalize } from '../../utils/utils'

const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case CARRIERS:
            return payload.reduce(normalize, {})
        case CARRIER:
            return {...state, [payload.id]: payload}
        default:
            return state
    }
}
