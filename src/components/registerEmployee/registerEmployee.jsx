import React, {useCallback} from 'react'
import Form from './registerEmployeeForm'
import {useAddEmployee} from '../../api/apiRequests'
import {useReset} from '../../hooks/hook'
import successSwal from '../warehousesPage/successSwal'

export default () => {
    const [keyPage, resetKey] = useReset()

    const handleResetForm = useCallback(
        () => {
            successSwal(resetKey, 'Employee successfully save')
        },
        [resetKey],
    )
    const [addEmployee, , errors] = useAddEmployee(handleResetForm)

    return <Form
        key={keyPage}
        onSubmit={addEmployee}
        errors={errors}
    />
}

