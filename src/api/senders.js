import createRest from './api'
import { SENDER, SENDERS } from '../actions/types'

export const {getAll: getAllSenders} = createRest('api/sender/', SENDER, SENDERS)