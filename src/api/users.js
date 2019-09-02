import createRest from './api'
import {USER, USERS} from '../actions/types'

export const {
    add: addUser,
    getAll: getUsers,
    get: getUser,
    edit: editUser
} = createRest('api/users/', USER, USERS)