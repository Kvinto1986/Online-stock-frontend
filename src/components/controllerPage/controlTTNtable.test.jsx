import React from 'react'
import {fireEvent, render, wait} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ControlTable from './controlTTNcargoTable'

const cargo = [{type: 'BOX', name: 'apple', amount: '10', id: '1234567'},
    {type: 'BOX', name: 'oranges', amount: '14', id: '7654321'},
    {type: 'BOX', name: 'melons', amount: '5', id: '1112223'}]

it('cargo table rendering test', async () => {

    const open = true

    const onChange = () => {
    }


    const {getByDisplayValue} = render(<ControlTable
        cargo={cargo}
        open={open}
        handleChangeTTN={onChange}
    />)

    expect(getByDisplayValue('oranges')).toBeInTheDocument()
    expect(getByDisplayValue('7654321')).toBeInTheDocument()
    expect(getByDisplayValue('5')).toBeInTheDocument()
})

it('table change button test', async () => {
    const open = true

    const onChange = (e,id) => {
        expect(e.target.value).toBe('applex')
        expect(id).toBe('1234567')
    }



    const {getByTestId, getByDisplayValue} = render(<ControlTable
        cargo={cargo}
        open={open}
        handleChangeTTN={onChange}
    />)

    const currentInput = getByTestId('1234567-name')

    fireEvent.change(currentInput, { target: { value: 'applex' } })



    expect(getByDisplayValue('applex')).toBeInTheDocument()

})