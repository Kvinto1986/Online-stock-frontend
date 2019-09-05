import React from 'react'
import RegisterPage from './registerEmployeePage'
import {useStorelessApiCallback} from "../../hooks/hook";
import {addEmployee} from "../../api/employee";
import {currentUser} from '../../filters'
import {useSelector} from "react-redux"


export default () => {
    const user = useSelector(currentUser);
    const [onSubmit,errors] = useStorelessApiCallback(addEmployee, ()=>{},{})
    return <RegisterPage
        onSubmit={onSubmit}
        errors={errors}
        currentUser={user}
    />
};

