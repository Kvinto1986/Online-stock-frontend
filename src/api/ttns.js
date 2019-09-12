import createRest from './api'
import { FETCH_TTN_BY_NUMBER } from '../actions/types'

export const {get: getTtn} = createRest(`api/ttn/`, FETCH_TTN_BY_NUMBER)