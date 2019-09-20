import React from 'react'
import {fireEvent, render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ControlSelect from './controlTTNsearch'

const options = [{label: 'apple', value: 'apple'},
    {label: 'orange', value: 'orange'}]

it('control select test', async () => {
    const open = true

    const onChange = (item) => {
        console.log(item)
        expect(item.value).toBe('apple')
    }


    const {getByTestId, getByDisplayValue, container} = render(<ControlSelect
        ttnsList={options}
        findTTN={onChange}
    />)


    const currentSelect = container.querySelector('input')
    //const currentSelect = getByTestId('select')
    //const currentValue=getByDisplayValue('apple')


    fireEvent.click(currentSelect)
    fireEvent.keyDown(currentSelect, {key: 'Enter', code: 13})
})
