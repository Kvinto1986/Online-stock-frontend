import React, {useEffect} from 'react'
import AllCarriers from './allCarrier'
import {useGetCarriers, useEditCarrier, useDelCarrier, useDelEmployee} from '../../api/apiRequests'

export default () => {

  const [getCarriers, carriers, getCarriersError] = useGetCarriers()
  const [delCarrier] = useDelCarrier()
  const [editCarrier] = useEditCarrier()


  useEffect(() => {
    getCarriers()
  }, [])
  return (
    <AllCarriers
      delCarrier={delCarrier}
      editCarrier={editCarrier}
      allCarriers={Object.values(carriers)}
    />
  )
}

