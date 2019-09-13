import {createRestHooks} from './restApi'
import {EMPLOYEE, EMPLOYEES} from '../actions/types'
import {employeesFilter} from '../filters'


export const {
    useAddEmployee,
    useDelEmployee,
    useGetEmployee,
    useGetEmployees,
    useEditEmployee
} = createRestHooks(EMPLOYEE, EMPLOYEES, employeesFilter)