import React from 'react'
import AllCarriers from './allCarrier'

const CarriersPage = ({allCarriers,  delCarrier, editCarrier}) => {

  return (
    <div>
        <AllCarriers
          delCarrier={delCarrier}
          editCarrier={editCarrier}
          allCarriers={allCarriers}  />
    </div>
  )
}

export default CarriersPage
