import React, {useEffect} from 'react'
import {useAddService, useDelService, useGetServices} from '../../api/apiRequests'
import Manager from './manager'

export default () => {
    const [getServices, services] = useGetServices()
    const [addService, , errors] = useAddService()
    const [delService] = useDelService()

    useEffect(getServices, [])

    return <Manager
        services={Object.values(services).map(service => ({...service, name: service.id}))}
        onCreate={addService}
        onDelete={delService}
        errorAdd={errors}
    />
}