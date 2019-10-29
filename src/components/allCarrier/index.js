import React, {useEffect} from 'react'
import CarriersPage from './carriersPage'
import {useGetCarriers, useEditCarrier, useDelCarrier, useDelEmployee} from '../../api/apiRequests'

export default () => {

  const [getCarriers, carriers, getCarriersError] = useGetCarriers()
  const [delCarrier] = useDelCarrier()
  const [editCarrier] = useEditCarrier()


  useEffect(() => {
    getCarriers()
  },[])
  return (
      <CarriersPage
        delCarrier={delCarrier}
        editCarrier={editCarrier}
        allCarriers={carriers}
      />
    )
}

