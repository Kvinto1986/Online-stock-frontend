import createRest from './api'
import {COMPANY_ADMIN, COMPANY_ADMINS} from '../store/actions/types'
import createStorelessRest from './storelessApi'

export const {
    getAll: getCompanyAdmins,
    get: getCompanyAdmin,
    edit: editCompanyAdmin
} = createRest('api/companyadmins/', COMPANY_ADMIN, COMPANY_ADMINS)

export const {add: addCompanyAdmin} = createStorelessRest('api/companyAdmins/')
