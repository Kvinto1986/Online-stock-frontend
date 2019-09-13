import React from 'react'
import Form from './registerEmployeeForm'
import {useAddEmployee} from '../../api/apiRequests'

export default () => {
    const [addEmployee, , errors] = useAddEmployee()

    return <Form
        onSubmit={addEmployee}
        errors={errors}
    />
}

