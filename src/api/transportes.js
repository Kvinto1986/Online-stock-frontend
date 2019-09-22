import createRest from './api'
import { CARRIER, CARRIERS } from '../actions/types'

export const {getAll: getAllTransporters} = createRest('api/carriers/', CARRIER, CARRIERS)