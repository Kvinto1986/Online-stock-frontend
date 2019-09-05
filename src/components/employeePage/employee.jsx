import React, {useEffect} from 'react'
import EmployeePage from './employeePage'
import {useApiCallback} from "../../hooks/hook";
import {getEmployees} from "../../api/employee";
import {useSelector} from "react-redux"


export default () => {
    const state = useSelector(state => state);
    const [getList,errors] = useApiCallback(getEmployees, ()=>{},{})

    useEffect(() => {
        getList()
    }, [])

    return <EmployeePage
        currentUser={state.auth.user}
        employeesList={state.employees}
        errors={errors}
    />
};