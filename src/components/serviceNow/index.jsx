import React, {useEffect, useState} from 'react'
import {getBy} from '../../servies/serviceNow'
import {useGetServices} from '../../api/apiRequests'
import ServicePage from './ServicesPage'

export default () => {
    const [getServices, services, getServicesError] = useGetServices()
    const [reports, setReports] = useState({})

    useEffect(() => {
        getServices()
    }, [])

    return (
        <ServicePage
            services={services}
            setReports={setReports}
            getBy={getBy}
            reports={reports}
        />
    )
}