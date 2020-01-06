import React, {useEffect} from 'react'
import EmployeePage from './page'
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

    const [delEmployee] = useDelEmployee(handleResetForm)

    useEffect(getEmployees, [])

    return <EmployeePage
        tableKey={tableKey}
        employees={employees}
        delEmployee={delEmployee}
    />
}
