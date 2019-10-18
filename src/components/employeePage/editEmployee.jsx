import React from 'react'
import RegisterEmployeeForm from '../registerEmployee/registerEmployeeForm'

export default ({editEmployee,employee,errors}) => {

    return <RegisterEmployeeForm
        onSubmit={(data) => editEmployee(data, employee.id)}
        errors={errors}
        initial={employee}
    />
}