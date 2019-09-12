import createRest from './api'
import {TTNS, TTN} from '../actions/types'

export const {getAll: getTTNS, get:getTTN} = createRest('api/ttn/', TTN, TTNS)