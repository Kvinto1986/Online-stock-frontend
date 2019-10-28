import {createRestHooks} from './restApi'
import {
    CARRIER,
    CARRIERS,
    DRIVER,
    DRIVERS,
    EMPLOYEE,
    EMPLOYEES,
    TTN, TTN_OUT,
    TTNS, TTNS_OUT,
    WAREHOUSE,
    WAREHOUSES
} from '../actions/types'
import {
    employeesFilter,
    carriersFilter,
    driversFilter,
    ttnsFilter,
    warehousesFilter,
    ttnsOutFilter
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
    useGetCarriers,
    useAddCarrier,
} = createRestHooks(CARRIER, CARRIERS, carriersFilter)

export const {
    useGetDriver,
    useAddDriver,
} = createRestHooks(DRIVER, DRIVERS, driversFilter)

export const {
    useGetTtn,
    useEditTtn,
    useAddTtn
} = createRestHooks(TTN, TTNS, ttnsFilter)

export const {
    useAddWarehouse,
    useDelWarehouse,
    useGetWarehouses,
} = createRestHooks(WAREHOUSE, WAREHOUSES, warehousesFilter)

export const {
    useAddTtnOut,
} = createRestHooks(TTN_OUT, TTNS_OUT, ttnsOutFilter)

