import createRest from './api'
import { CARRIER, CARRIERS } from '../store/actions/types'

export const {getAll: getAllTransporters} = createRest('api/carriers/', CARRIER, CARRIERS)
