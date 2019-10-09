import {combineReducers} from 'redux'
import errorReducer from './errorReducer'
import authReducer from './authReducer'
import adminCompanyStatisticReduser from './adminsCompanyStatisticReduser'
import companiesListReduser from './companiesListReduser'
import companyReduser from './companyReduser'
import warehouseReduser from './warehouseReduser'
import carriersReducer from './carriersReducer'
import warehousingFlagRegucer from './warehousingFlagRegucer'
import warehousingActiveStockReducer from './warehousingActiveStockReducer'
import ttnReducer from './ttnReduser'
import {normalize} from '../utils/utils'

import {EMPLOYEE, EMPLOYEES,CARRIER,CARRIERS,DRIVER,DRIVERS,TTN,TTNS} from '../actions/types'


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

const carriers = createNormalReducer(CARRIER,CARRIERS)
const drivers = createNormalReducer(DRIVER,DRIVERS)
const ttns = createNormalReducer(TTN,TTNS)

export default combineReducers({
    employees,
    carriers,
    drivers,
    ttns,
    ttn:ttnReducer,
    errors: errorReducer,
    auth: authReducer,
    adminCompanyStatistic: adminCompanyStatisticReduser,
    companiesList: companiesListReduser,
    currentCompany: companyReduser,
    warehouses: warehouseReduser,
    carriersReducer: carriersReducer,
    warehousingFlag: warehousingFlagRegucer,
    warehousingActiveStock: warehousingActiveStockReducer
})