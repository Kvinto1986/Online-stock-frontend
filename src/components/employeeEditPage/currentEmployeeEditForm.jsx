import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {authUser} from '../../store/filters'
import {useEditEmployee} from '../../api/apiRequests'
import EditEmployeeForm from './editEmployeeForm'
import {logoutUser} from '../../store/actions/authenticationAction'
import Swal from 'sweetalert2'

export default function CurrentEmployeeEditForm() {
    const employee = useSelector(authUser);
    const dispatch = useDispatch();
    const [withPass, setWithPass] = useState(false);
    const [editEmployee, errors, editErrors] = useEditEmployee(() => {
        Swal.fire({
            type: 'success',
            title: 'Congratulations!',
            text: 'Data successfully changed !',
            showConfirmButton: false,
            timer: 1500
        })
    });

    useEffect(() => {
        if (Object.keys(errors).length && withPass) {
            logoutUser(dispatch)()
        }
    });

    const onSubmit = form => {
        editEmployee(form, employee.id);
        setWithPass(!!form.password);
    };

    return (
        <EditEmployeeForm onSubmit={onSubmit}
                          errors={editErrors}
                          initial={employee}/>
    )
}
