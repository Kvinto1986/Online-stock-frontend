import {createRestHooks} from './restApi'
import {
    EMPLOYEE, 
    EMPLOYEES,
    CARRIER,
    CARRIERS,
    DRIVER,
    DRIVERS,
    TTN,
    TTNS,
    WAREHOUSE,
    WAREHOUSES
} from '../actions/types'
import {
    employeesFilter,
    carriersFilter,
    driversFilter,
    ttnsFilter,
    warehouseFilter
} from '../filters'

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
    useGetTtn
} = createRestHooks(TTN, TTNS, ttnsFilter)

export const {
    useGetWarehouses
} = createRestHooks(WAREHOUSE, WAREHOUSES, warehouseFilter)