import React from 'react'
import RegisterForm from './registerEmployeePage'
import {useApiCallback} from "../../hooks/hook";
import {addEmployee} from "../../api/users";
import {currentUser} from '../../filters'
import {useSelector} from "react-redux";


export default () => {
    const user = useSelector(currentUser);
    const [onSubmit, _, errors] = useApiCallback(addEmployee, false, {})

    return <RegisterForm
        onSubmit={onSubmit}
        errors={errors}
        currentUser={user}
    />
};

