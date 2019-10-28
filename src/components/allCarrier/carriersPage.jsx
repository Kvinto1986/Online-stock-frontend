import React from 'react'
import AllCarriers from './allCarrier'

const CarriersPage = ({allCarriers, history}) => {

  return (
    <div>
        <AllCarriers
          history={history}
          allCarriers={allCarriers}  />
    </div>
  )
}

export default CarriersPage
