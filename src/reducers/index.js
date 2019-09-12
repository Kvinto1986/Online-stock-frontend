import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import adminCompanyStatisticReduser from './adminsCompanyStatisticReduser';
import companiesListReduser from './companiesListReduser';
import companyReduser from './companyReduser';
import warehouseReduser from './warehouseReduser';
import ttnReducer from './ttnsReducer'
import carriersReducer from "./carriersReducer";
import warehousingFlagRegucer from './warehousingFlagRegucer'
import warehousingActiveStockReducer from './warehousingActiveStockReducer'
import employeeReducer from './employeesReducer'
import TTNSReduser from './ttnsReducer'
import TTNReduser from './ttnReduser'


export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    adminCompanyStatistic:adminCompanyStatisticReduser,
    companiesList:companiesListReduser,
    currentCompany:companyReduser,
    warehouses:warehouseReduser,
    ttnData: ttnReducer,
    employees:employeeReducer,
    TTNS:TTNSReduser,
    TTN:TTNReduser,
    carriersReducer: carriersReducer,
    warehousingFlag: warehousingFlagRegucer,
    warehousingActiveStock: warehousingActiveStockReducer
});

