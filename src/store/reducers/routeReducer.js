import {
    COMPANY_ADMIN,
    CONTROLLER_POSITION,
    EMPLOYEE,
    MAIN_ADMIN,
    MANAGER_POSITION,
    OPERATOR_POSITION
} from "../../constants/role.constants";
import {GET_MAIN_ADMIN_ROUTES} from "../actions/types";

/**
 * Хранилище роутов. Не всех, но которые могут отражаться в дравере.
 * meta - доп информация для разных компонентов.
 * meta.role - роль пользователя
 * meta.position - позиция(для одной роли)
 * meta.showInNavigation - todo: можно сделать так, что бы в view компоненте отрисовывались все роуты <Route .../>
 * по этому стору, но некоторые роуты не должны отображаться в дравере.
 *
 * пометил в комментах как роут назывался раньше, как сейчас. todo: зарефачить остальные, сделайте по rest'у
 * */

const initialState = {
    routes: [
        {
            name: 'Home',
            route: '/',
            icon: "",
            meta: {
                role: MAIN_ADMIN,
                showInNavigation: true,
            }
        },
        {
            name: 'Services',
            route: '/serviceManager',
            icon: "",
            meta: {
                role: MAIN_ADMIN,
                showInNavigation: true,
            }
        },
        {
            name: 'Create company admin',
            route: '/newCompanyAdmin',
            icon: "",
            meta: {
                role: MAIN_ADMIN,
                showInNavigation: true,
            }
        },
        {
            name: 'Companies',
            route: '/companies',
            icon: "",
            meta: {
                role: MAIN_ADMIN,
                showInNavigation: true,
            }
        },
        {
            name: 'Reports',
            route: '/reports',
            icon: "",
            meta: {
                role: MAIN_ADMIN,
                showInNavigation: true,
            }
        },
        {
            name: 'Home',
            route: '/',
            icon: "",
            meta: {
                role: COMPANY_ADMIN,
                showInNavigation: true,
            }
        },
        {
            name: 'Create new employee',
            route: '/employees/add',        //createUser
            icon: "",
            meta: {
                role: COMPANY_ADMIN,
                showInNavigation: true,
            }
        },
        {
            name: 'My warehouses',
            route: '/myWarehouses',
            icon: "",
            meta: {
                role: COMPANY_ADMIN,
                showInNavigation: true,
            }
        },
        {
            name: 'Company employees',
            route: '/employees',
            icon: "",
            meta: {
                role: COMPANY_ADMIN,
                showInNavigation: true,
            }
        },
        {
            name: 'Employee',
            route: '/employees/:id',
            icon: "",
            meta: {
                role: COMPANY_ADMIN,
                showInNavigation: false,
            }
        },
        {
            name: 'Out TTN registration',
            route: '/outTtnRegister',
            icon: "",
            meta: {
                role: EMPLOYEE,
                position: MANAGER_POSITION,
                showInNavigation: true,
            }
        },
        {
            name: 'Warehousing',
            route: '/warehousing',
            icon: "",
            meta: {
                role: EMPLOYEE,
                position: MANAGER_POSITION,
                showInNavigation: true,
            }
        },
        {
            name: 'Warehouses Info',
            route: '/warehousesInfo',
            icon: "",
            meta: {
                role: EMPLOYEE,
                position: MANAGER_POSITION,
                showInNavigation: true,
            }
        },
        {
            name: 'TTN registration',
            route: '/ttns/add',             //ttnRegister
            icon: "",
            meta: {
                role: EMPLOYEE,
                position: OPERATOR_POSITION,
                showInNavigation: true,
            }
        },
        {
            name: 'All carriers',
            route: '/carriers',             //allCarrier
            icon: "",
            meta: {
                role: EMPLOYEE,
                position: OPERATOR_POSITION,
                showInNavigation: true,
            }
        },
        {
            name: 'Check Ttn',
            route: '/ttns/check',           //checkTtn
            icon: "",
            meta: {
                role: EMPLOYEE,
                position: OPERATOR_POSITION,
                showInNavigation: true,
            }
        },
        {
            name: 'TTN control',
            route: '/ttns',                  //controller
            icon: "",
            meta: {
                role: EMPLOYEE,
                position: CONTROLLER_POSITION,
                showInNavigation: true,
            }
        },
    ]
};
//<Route exact path="/employees/:id" component={Employee}/>

export default function (state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
