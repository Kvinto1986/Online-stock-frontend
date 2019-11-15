export const authUserFilter = store => store.auth.user
export const authUser = store => store.auth.user
export const senders = store => store.senders
export const carriers = store => store.carriers
export const carriersFilter = store => store.carriers
export const driversFilter = store => store.drivers
export const ttns = store => store.ttnData
export const employeesFilter = store => store.employees
export const ttnsFilter = store => store.ttns
export const company = ({auth}) => auth.user.company
export const warehousesFilter = store => store.warehouses
export const ttnsOutFilter = store => store.ttnsOut
export const ttnsExportOrderFilter = store => store.ttnsExportOrders
export const ttnsImportOrderFilter = store => store.ttnsImportOrders
export const servicesFilter = store => store.services


