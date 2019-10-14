import {createRestHooks} from './restApi'
import {EMPLOYEE, EMPLOYEES,CARRIER,CARRIERS,DRIVER,DRIVERS,TTN,TTNS,WAREHOUSE,WAREHOUSES} from '../actions/types'
import {employeesFilter,carriersFilter,driversFilter,ttnsFilter,warehousesFilter} from '../filters'


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
    useGetTtns,
    useGetTtn,
    useEditTtn,
    useAddTtn,
} = createRestHooks(TTN, TTNS, ttnsFilter)

export const {
    useAddWarehouse,
    useDelWarehouse,
    useGetWarehouses,
} = createRestHooks(WAREHOUSE,WAREHOUSES, warehousesFilter)