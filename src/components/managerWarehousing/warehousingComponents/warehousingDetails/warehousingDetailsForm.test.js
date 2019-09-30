import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import WarehousingDetailsForm from './warehousingDetailsForm'

const cargoDetails = {
    name: "apple", 
    amount: "1", 
    dimension: "BOX", 
    size: 1, 
    id: "1"
}

const areaData = {
    index: 1, area: 230, type: "heated"
}

const changeActiveData = () => {}

it('cargo unit warehousing details rendering test', async () => {
    const {getByText} = render(
        <WarehousingDetailsForm 
            cargoDetails={cargoDetails} 
            areaData={areaData} 
            changeActiveData={changeActiveData}
        />
    )

    expect(getByText('Name: apple')).toBeInTheDocument()
    expect(getByText('Cargo amount: 1BOX')).toBeInTheDocument()
})