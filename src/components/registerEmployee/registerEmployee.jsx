import React from 'react'
import Form from './registerEmployeeForm'
import {useAddEmployee} from '../../api/apiRequests'
import swalModal from './swalModal'

export default () => {

    const [addEmployee, , errors] = useAddEmployee(swalModal)

    return <Form
        onSubmit={addEmployee}
        errors={errors}
    />
}

