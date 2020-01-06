import React, {useEffect} from 'react'
import EmployeePage from './page'
import {useSelector} from 'react-redux'
import {useDelEmployee, useGetEmployees} from '../../api/apiRequests'
import {useReset} from '../../hooks/hook'
import successSwal from '../swal/findSwal'


export default () => {
    const [tableKey, resetTable] = useReset()

    const [getEmployees, employees] = useGetEmployees()

    const handleResetForm = () => {
        successSwal()
        getEmployees()
    }

    const company = useSelector(state => state.auth.user.company)
    const [delEmployee] = useDelEmployee(handleResetForm)

    useEffect(getEmployees, [])

    return <EmployeePage
        tableKey={tableKey}
        company={company}
        employees={employees}
        delEmployee={delEmployee}
    />
}
