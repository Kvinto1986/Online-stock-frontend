import React, {useEffect} from 'react'
import EmployeePage from './page'
import {useSelector} from 'react-redux'
import {useDelEmployee, useGetEmployees} from '../../api/apiRequests'


export default () => {
    const company = useSelector(state => state.auth.user.company)
    const [getEmployees, employees] = useGetEmployees()
    const [delEmployee] = useDelEmployee()

    useEffect(getEmployees, [])

    return <EmployeePage
        company={company}
        employees={employees}
        delEmployee={delEmployee}
    />
}