import {createRestHooks} from './restApi'
import {
    CARRIER,
    CARRIERS,
    DRIVER,
    DRIVERS,
    EMPLOYEE,
    EMPLOYEES,
    SERVICE,
    SERVICES,
    TTN,
    TTN_OUT,
    TTNS,
    TTNS_OUT,
    WAREHOUSE,
    WAREHOUSES,
    TTN_EXPORT_ORDER,
    TTN_EXPORT_ORDERS,
    TTN_IMPORT_ORDER,
    TTN_IMPORT_ORDERS
} from '../actions/types'
import {
    carriersFilter,
    driversFilter,
    employeesFilter,
    servicesFilter,
    ttnsFilter,
    warehousesFilter,
    ttnsOutFilter,
    ttnsExportOrderFilter,
    ttnsImportOrderFilter
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
    useEditCarrier,
    useDelCarrier,
} = createRestHooks(CARRIER, CARRIERS, carriersFilter)

export const {
    useGetDriver,
    useAddDriver,
} = createRestHooks(DRIVER, DRIVERS, driversFilter)

export const {
    useGetTtn,
    useEditTtn,
    useAddTtn,
    useDelTtn,
} = createRestHooks(TTN, TTNS, ttnsFilter)

export const {
    useAddWarehouse,
    useDelWarehouse,
    useGetWarehouse,
    useGetWarehouses
} = createRestHooks(WAREHOUSE, WAREHOUSES, warehousesFilter)

export const {
    useAddTtnOut,
} = createRestHooks(TTN_OUT, TTNS_OUT, ttnsOutFilter)

export const {
    useGetTtnExportOrder,
} = createRestHooks(TTN_EXPORT_ORDER, TTN_EXPORT_ORDERS, ttnsExportOrderFilter)

export const {
    useGetTtnImportOrder,
} = createRestHooks(TTN_IMPORT_ORDER, TTN_IMPORT_ORDERS, ttnsImportOrderFilter)

export const {
    useAddService,
    useDelService,
    useGetServices,
    useEditService,
} = createRestHooks(SERVICE, SERVICES, servicesFilter)

