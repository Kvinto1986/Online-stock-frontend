import createRest from './api'
import createStorelessApi from './storelessApi'
import { FETCH_TTN_BY_NUMBER } from '../actions/types'

export const {get: getTtn} = createRest(`api/ttn/wirehousedTtn/`, FETCH_TTN_BY_NUMBER)
export const {edit: finishStockDelivery} = createStorelessApi(`api/ttn/finishStockDelivery`)