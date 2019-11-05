import React, {useEffect} from 'react'
import AllCarriers from './allCarrier'
import {useGetCarriers, useEditCarrier, useDelCarrier} from '../../api/apiRequests'

export default () => {

  const [getCarriers, carriers] = useGetCarriers()
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
