import {combineReducers} from 'redux'
import errorReducer from './errorReducer'
import authReducer from './authReducer'
import adminCompanyStatisticReduser from './adminsCompanyStatisticReduser'
import companiesListReduser from './companiesListReduser'
import companyReduser from './companyReduser'
import carriersReducer from './carriersReducer'
import {normalize} from '../utils/utils'

import {
    CARRIER,
    CARRIERS,
    DRIVER,
    DRIVERS,
    EMPLOYEE,
    EMPLOYEES,
    SERVICE,
    SERVICES,
    TTN,
    TTN_OUT,
    TTNS,
    TTNS_OUT,
    WAREHOUSE,
    WAREHOUSES,
    TTN_ORDER,
    TTN_ORDERS
} from '../actions/types'

function createNormalReducer(singular, plural) {
    return (store = {}, {type, data}) => {
        switch (type) {
            case plural:
                return data.reduce(normalize, {})
            case singular:
                return {...store, [data.id]: data}
            case `DELETE_${singular}`:
                const newStore = {...store}
                delete newStore[data.id]
                return newStore
            default:
                return store
        }
    }
}

const employees = createNormalReducer(EMPLOYEE, EMPLOYEES)
const carriers = createNormalReducer(CARRIER, CARRIERS)
const drivers = createNormalReducer(DRIVER, DRIVERS)
const ttns = createNormalReducer(TTN, TTNS)
const warehouses = createNormalReducer(WAREHOUSE, WAREHOUSES)
const ttnsOut = createNormalReducer(TTN_OUT, TTNS_OUT)
const services = createNormalReducer(SERVICE, SERVICES)
const ttnsOrder = createNormalReducer(TTN_ORDER, TTN_ORDERS)

export default combineReducers({
    warehouses,
    employees,
    carriers,
    drivers,
    ttns,
    ttnsOut,
    services,
    ttnsOrder,
    errors: errorReducer,
    auth: authReducer,
    adminCompanyStatistic: adminCompanyStatisticReduser,
    companiesList: companiesListReduser,
    currentCompany: companyReduser,
    carriersReducer: carriersReducer,
})