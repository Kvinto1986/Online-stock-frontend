import {combineReducers} from 'redux'
import errorReducer from './errorReducer'
import authReducer from './authReducer'
import adminCompanyStatisticReduser from './adminsCompanyStatisticReduser'
import companiesListReduser from './companiesListReduser'
import companyReduser from './companyReduser'
import warehouseReduser from './warehouseReduser'
import ttnReducer from './ttnReducer'
import carriersReducer from './carriersReducer'
import warehousingFlagRegucer from './warehousingFlagRegucer'
import warehousingActiveStockReducer from './warehousingActiveStockReducer'
import {normalize} from '../utils/utils'
import {EMPLOYEE, EMPLOYEES} from '../actions/types'


function createNormalReducer(singular, plural) {
    return (store = {}, {type, data}) => {
        switch (type) {
            case plural:
                return data.reduce(normalize, {})
            case singular:
                return {...store, [data.id]: data}
            case `DELETE_${singular}`:
                return {...store, [data.id]: undefined}
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
    ttnData: ttnReducer,
    carriersReducer: carriersReducer,
    warehousingFlag: warehousingFlagRegucer,
    warehousingActiveStock: warehousingActiveStockReducer
})
