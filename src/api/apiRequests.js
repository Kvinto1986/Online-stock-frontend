import {createRestHooks} from './restApi'
import {EMPLOYEE, EMPLOYEES,CARRIER,CARRIERS,DRIVER,DRIVERS,TTN,TTNS} from '../actions/types'
import {employeesFilter,carriersFilter,driversFilter,ttnsFilter} from '../filters'


export const {
    useAddEmployee,
    useDelEmployee,
    useGetEmployee,
    useGetEmployees,
    useEditEmployee
} = createRestHooks(EMPLOYEE, EMPLOYEES, employeesFilter)

export const {
    useGetCarrier,
    useAddCarrier,
} = createRestHooks(CARRIER, CARRIERS, carriersFilter)

export const {
    useGetDriver,
    useAddDriver,
} = createRestHooks(DRIVER, DRIVERS, driversFilter)

export const {
    useAddTtn,
} = createRestHooks(TTN, TTNS, ttnsFilter)