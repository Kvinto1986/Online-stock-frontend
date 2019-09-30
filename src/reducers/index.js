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
import senderReducer from './senderReducer'
import carrierReducer from './carrierReducer'
import {normalize} from '../utils/utils'
import ttnReduser from './ttnReduser'
import ttnsReducer from './ttnsReducer'
import {EMPLOYEE, EMPLOYEES} from '../actions/types'


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

export default combineReducers({
    employees,
    errors: errorReducer,
    auth: authReducer,
    adminCompanyStatistic: adminCompanyStatisticReduser,
    companiesList: companiesListReduser,
    currentCompany: companyReduser,
    warehouses: warehouseReduser,
    carriersReducer: carriersReducer,
    TTN: ttnReduser,
    TTNS: ttnsReducer,
    warehousingFlag: warehousingFlagRegucer,
    warehousingActiveStock: warehousingActiveStockReducer,
    senders: senderReducer,
    carriers: carrierReducer
});

