import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ControlCard from './controlTTNcard'

const ttn = {
    number: '12345',
    carrier: 'Jack Sparrow',
    driver: 'Scooby Doo',
    registrar: 'TestRegistrar@mail.com',
    carNumber: '0987654321',
    sender: 'Jone jone',
    description: 'Hello world!',
    products: [{type: 'BOX', name: 'apple', amount: '10', id: '1234567'},
        {type: 'BOX', name: 'oranges', amount: '14', id: '7654321'},
        {type: 'BOX', name: 'melons', amount: '5', id: '1112223'}]
}

const open = true
const report = ''

const setReport = () => {
}

it('control card rendering test', async () => {


    const {getByText} = render(<ControlCard
        ttn={ttn}
        open={open}
        report={report}
        setReport={setReport}
    />)

    expect(getByText('TTN #12345')).toBeInTheDocument()
    expect(getByText('Sender: Jone jone')).toBeInTheDocument()
    expect(getByText('Carrier: Jack Sparrow')).toBeInTheDocument()
    expect(getByText('Driver name: Scooby Doo')).toBeInTheDocument()
    expect(getByText('Car number: 0987654321')).toBeInTheDocument()
    expect(getByText('Operator name: TestRegistrar@mail.com')).toBeInTheDocument()
    expect(getByText('Hello world!')).toBeInTheDocument()
})

