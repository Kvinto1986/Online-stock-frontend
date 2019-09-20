import createRest from './api'
import { SENDER, SENDERS } from '../actions/types'

export const {getAll: getAllSenders} = createRest('api/senders/', SENDER, SENDERS)