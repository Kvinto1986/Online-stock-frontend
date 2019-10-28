import React, {useEffect} from 'react'
import CarriersPage from './carriersPage'
import { useGetCarriers } from '../../api/apiRequests'

export default (props) => {

  const [getCarriers, carriers, getCarriersError] = useGetCarriers()


  useEffect(() => {
    getCarriers()
  },[])
  return (
      <CarriersPage
        history={props.history}
        allCarriers={carriers}
      />
    )
}

