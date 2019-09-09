import {EMPLOYEE, EMPLOYEES} from '../actions/types'
import {normalize} from '../utils/utils'

const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case EMPLOYEES:
            return payload.reduce(normalize('id'), {})
        case EMPLOYEE:
            return {...state, [payload.id]: payload}
        default:
            return state
    }
}