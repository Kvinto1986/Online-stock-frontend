export const employeesFilter = store => store.employees
export const ttnsFilter = store => store.TTNS
export const ttnFilter = store => store.TTN
export const authUser = ({auth}) => auth.user
export const company = ({auth}) => auth.user.company