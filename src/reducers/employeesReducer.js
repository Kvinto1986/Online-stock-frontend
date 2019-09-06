import {EMPLOYEE, EMPLOYEES} from '../actions/types'
import {normalize} from '../utils/utils'

const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case EMPLOYEES:
            return payload.reduce(normalize('_id'), {})
        case EMPLOYEE:
            return {...state, [payload._id]: payload}
        default:
            return state
    }
}