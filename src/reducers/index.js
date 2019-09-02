import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import adminCompanyStatisticReduser from './adminsCompanyStatisticReduser';
import companiesListReduser from './companiesListReduser';
import companyReduser from './companyReduser';
import warehouseReduser from './warehouseReduser';

import ttnReducer from './ttnReducer'

import carriersReducer from "./carriersReducer";
import users from './userReducer'


export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    adminCompanyStatistic:adminCompanyStatisticReduser,
    companiesList:companiesListReduser,
    currentCompany:companyReduser,
    warehouses:warehouseReduser,

    ttnData: ttnReducer

    carriersReducer: carriersReducer,
    users

});