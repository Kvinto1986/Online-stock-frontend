import React from 'react'
import Form from './registerEmployeeForm'
import {useAddEmployee} from '../../api/apiRequests'
import successSwal from '../warehousesPage/successSwal'
import {useReset} from '../../hooks/hook'

export default () => {
    const [formKey, resetForm] = useReset()

    const handleReset = () => {
        successSwal(resetForm, 'New employee successfully registered.')
    }

    const [addEmployee, , errors] = useAddEmployee(handleReset)

    return <Form
        key={formKey}
        onSubmit={addEmployee}
        errors={errors}
    />
}

