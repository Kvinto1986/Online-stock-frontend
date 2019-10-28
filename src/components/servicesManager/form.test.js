import {fireEvent, render} from '@testing-library/react'
import React from 'react'
import Form from './form'
import {wait} from '@testing-library/dom'


it('should add call onCreate when add button pressed and field name has value', async () => {
    const onCreate = jest.fn()

    const {getByTestId} = render(<Form
        onCreate={onCreate}
        error={{}}
    />)

    const create = getByTestId('create')
    fireEvent.click(create)

    const name = getByTestId('name')
    fireEvent.change(name, {target: {value: 'new_service_1'}})

    fireEvent.click(create)

    await wait(() => expect(onCreate.mock.calls[0]).toEqual([{name: 'new_service_1'}]))
})