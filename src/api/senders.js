import createRest from './api'
import { SENDER, SENDERS } from '../store/actions/types'

export const {getAll: getAllSenders} = createRest('api/senders/', SENDER, SENDERS)
