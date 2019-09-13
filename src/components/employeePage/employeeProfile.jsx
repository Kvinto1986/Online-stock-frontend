import React, {useEffect} from 'react'
import Switcher from './switcher'
import {useGetEmployee} from '../../api/apiRequests'
import PropTypes from 'prop-types'

export default function EmployeeProfile({employeeId}) {
    const [getEmployee, employees] = useGetEmployee()
    useEffect(() => getEmployee(employeeId), [employeeId, getEmployee])

    return <Switcher
        employee={employees[employeeId] || {}}
        editPermission={true}
    />
}

EmployeeProfile.propTypes = {
    employeeId: PropTypes.string.isRequired,
}