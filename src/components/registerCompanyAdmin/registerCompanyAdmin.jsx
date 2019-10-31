import React from 'react'
import CompanyAdminPage from './registerCompanyAdminPage'
import {useStorelessApiCallback} from '../../hooks/hook'
import {addCompanyAdmin} from '../../api/companyAdmins'
import {useReset} from './../../hooks/hook'
import succesAlert from '../swal/succesSwal'

export default () => {
    const [keyReset, reset] = useReset()
    const [onSubmit, errors] = useStorelessApiCallback(
        addCompanyAdmin, 
        () => succesAlert('Success!','Company admin has been registred', 2000, false, reset)
    )

    return <CompanyAdminPage
        onSubmit={onSubmit}
        errors={errors}
        keyReset={keyReset}
    />
}

