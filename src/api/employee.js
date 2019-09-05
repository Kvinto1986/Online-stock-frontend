import createRest from './api'
import createStorelessRest from './storelessApi'
import {EMPLOYEES, EMPLOYEE} from '../actions/types'

export const {add: addEmployee} = createStorelessRest('api/employee/')
export const {getAll: getEmployees} = createRest('api/employee/', EMPLOYEE, EMPLOYEES)