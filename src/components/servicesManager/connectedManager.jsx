import React, {useEffect} from 'react'
import {useAddService, useDelService, useGetServices, useEditService} from '../../api/apiRequests'
import Manager from './manager'
import swal from '../swal/choiseSwal'
import findSwal from '../swal/findSwal'


export default () => {
    const [getServices, services] = useGetServices()
    const [addService, , errors] = useAddService(findSwal)
    const [delService] = useDelService()
    const [editService] = useEditService()

    useEffect(getServices, [])

    const handleDeleteService = (id) => {
        swal(delService,id)
    }

    const handleEditService = (id) => {
        swal(editService,id)
    }

    return <Manager
        services={Object.values(services).map(service => ({...service, name: service.id}))}
        onCreate={addService}
        onDelete={handleDeleteService}
        errorAdd={errors}
        editService={handleEditService}
    />
}