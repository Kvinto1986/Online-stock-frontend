import React from 'react'
import Form from './registerEmployeeForm'
import {useAddEmployee} from '../../api/apiRequests'
import {useReset} from '../../hooks/hook'
import findSwal from '../swal/findSwal'

export default () => {
    const [formKey, resetForm] = useReset()

    const handleReset = () => {
        findSwal()
        resetForm()
    }

    const [addEmployee, , errors] = useAddEmployee(handleReset)

    return <Form
        key={formKey}
        onSubmit={addEmployee}
        errors={errors}
    />
}

