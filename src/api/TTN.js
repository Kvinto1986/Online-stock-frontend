import createRest from './api'

import createStorelessRest from './storelessApi'
import {TTNS, TTN} from '../actions/types'

export const {getAll: getTTNS, get:getTTN} = createRest('api/ttn/', TTN, TTNS)
export const {edit: editTTN} = createStorelessRest('api/ttn/edit/')

