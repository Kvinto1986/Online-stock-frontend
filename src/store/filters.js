import {COMPANY_ADMIN, EMPLOYEE, MAIN_ADMIN} from "../constants/role.constants";

export const authUserFilter = store => store.auth.user;
export const authenticatedFilter = store => store.auth.isAuthenticated;
export const authUser = store => store.auth.user;
export const senders = store => store.senders;
export const carriers = store => store.carriers;
export const carriersFilter = store => store.carriers;
export const driversFilter = store => store.drivers;
export const ttns = store => store.ttnData;
export const employeesFilter = store => store.employees;
export const ttnsFilter = store => store.ttns;
export const company = ({auth}) => auth.user.company;
export const warehousesFilter = store => store.warehouses;
export const ttnsOutFilter = store => store.ttnsOut;
export const ttnsExportOrderFilter = store => store.ttnsExportOrders;
export const ttnsImportOrderFilter = store => store.ttnsImportOrders;
export const servicesFilter = store => store.services;

//Геттеры роутов по ролям + по позициям
export const getRoutes = store => {
    const user = store.auth.user;

    return store.routeReducer.routes.filter(
        route => (
            route.meta.role === user.role &&
            (route.meta.position ? user.position.includes(route.meta.position) : true)
        )
    );
};
export const getNavigationRoutes = store => getRoutes(store).filter(route => route.meta.showInNavigation);
