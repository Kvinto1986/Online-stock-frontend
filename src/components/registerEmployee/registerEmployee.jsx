import React from 'react'
import RegisterPage from './registerEmployeePage'
import {useStorelessApiCallback} from "../../hooks/hook";
import {addEmployee} from "../../api/employee";
import {useSelector} from "react-redux"


export default () => {
    const state = useSelector(state=>state);
    const [onSubmit,errors] = useStorelessApiCallback(addEmployee, ()=>{},{})
    return <RegisterPage
        onSubmit={onSubmit}
        errors={errors}
        currentUser={state.auth.user}
    />
};

