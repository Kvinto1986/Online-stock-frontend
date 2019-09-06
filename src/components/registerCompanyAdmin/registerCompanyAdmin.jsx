import React from 'react'
import CompanyAdminPage from './registerCompanyAdminPage'
import {useStorelessApiCallback} from '../../hooks/hook'
import {addCompanyAdmin} from '../../api/companyAdmins'

export default () => {

    const [onSubmit,errors] = useStorelessApiCallback(addCompanyAdmin, ()=>{})
    return <CompanyAdminPage
        onSubmit={onSubmit}
        errors={errors}
    />
};

