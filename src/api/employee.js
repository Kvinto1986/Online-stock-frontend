import createRest from './api'
import createStorelessRest from './storelessApi'
import {EMPLOYEES, EMPLOYEE} from '../store/actions/types'

export const {add: addEmployee, delete: deleteEmployee} = createStorelessRest('api/employees/')
export const {getAll: getEmployees} = createRest('api/employees/', EMPLOYEE, EMPLOYEES)
