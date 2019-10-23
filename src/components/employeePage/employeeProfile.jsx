import React, {useCallback, useEffect} from 'react'
import Switcher from './switcher'
import {useEditEmployee, useGetEmployee} from '../../api/apiRequests'
import PropTypes from 'prop-types'
import {useReset} from '../../hooks/hook'
import successSwal from '../warehousesPage/successSwal'

export default function EmployeeProfile({employeeId}) {
    const [keyPage, resetKey] = useReset()

    const handleResetForm = useCallback(
        () => {
            successSwal(resetKey, 'TTN successfully save')
        },
        [resetKey],
    )

    const [editEmployee, , errors] = useEditEmployee(handleResetForm)
    const [getEmployee, employees] = useGetEmployee()
    useEffect(() => getEmployee(employeeId), [employeeId, getEmployee])

    return <Switcher
        key={keyPage}
        editEmployee={editEmployee}
        errors={errors}
        employee={employees[employeeId] || {}}
    />
}

EmployeeProfile.propTypes = {
    employeeId: PropTypes.string.isRequired,
}