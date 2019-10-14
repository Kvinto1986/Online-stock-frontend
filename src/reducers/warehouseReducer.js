import { WAREHOUSE, WAREHOUSES } from '../actions/types'

const initialState = []

export default function(state = initialState, action ) {
    switch(action.type) {
        case WAREHOUSE:
            return action.payload
        case WAREHOUSES: 
            return action.payload
        default:
            return state
    }
}