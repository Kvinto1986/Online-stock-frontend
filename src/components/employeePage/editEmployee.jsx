import React from 'react'
import RegisterEmployeeForm from '../registerEmployee/registerEmployeeForm'
import {useEditEmployee} from '../../api/apiRequests'

export default ({employee}) => {
    const [editEmployee, , errors] = useEditEmployee()

    return <RegisterEmployeeForm
        onSubmit={(data) => editEmployee(data, employee.id)}
        errors={errors}
        initial={employee}
    />
}