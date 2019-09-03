import createRest from './api'
import {USER, USERS} from '../actions/types'

export const {
    add: addEmployee,
    getAll: getUsers,
    get: getUser,
    edit: editUser
} = createRest('api/employee/', USER, USERS)