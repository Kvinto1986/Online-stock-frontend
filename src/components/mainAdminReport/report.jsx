import React from 'react'
import ReportPage from './reportPage'
import {useApiCallback} from '../../hooks/hook'
import {addCompanyAdmin} from '../../api/companyAdmins'

export default () => {

    const [onSubmit,errors] = useApiCallback(addCompanyAdmin, ()=>{})
    return <ReportPage
        onSubmit={onSubmit}
        errors={errors}
    />
};
