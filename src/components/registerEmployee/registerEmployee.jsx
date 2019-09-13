import React from 'react'
import {useStorelessApiCallback} from "../../hooks/hook";
import {addEmployee} from "../../api/employee";
import {useSelector} from "react-redux"
import Form from './registerEmployeeForm'

export default () => {
    const user = useSelector(state=>state.auth.user);
    const [onSubmit,errors] = useStorelessApiCallback(addEmployee, ()=>{},{})

    return <Form
        onSubmit={onSubmit}
        errors={errors}
        currentUser={user}
    />
};

