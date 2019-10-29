import React from 'react'
import {cleanup, fireEvent, render} from '@testing-library/react'
import {wait} from '@testing-library/dom'
import Row from './row'

const name = 'Some company'
const token = '2h73iy23h27iyd2h723d72hidh'

beforeEach(cleanup)

it('should show name and token', async () => {
    const {getByText, getByDisplayValue} = render(<Row
        name={name}
        token={token}
    />)

    getByText(name)
    getByDisplayValue(token)
})

it('should call onDelete when delete button pressed', async () => {
    const onDelete = jest.fn()

    const {getByTestId} = render(<Row
        id={1}
        name={name}
        token={token}
        onDelete={onDelete}
    />)

    const deleteButton = getByTestId('delete-1')
    fireEvent.click(deleteButton)
    await wait(() => expect(onDelete).toBeCalledTimes(1))
    expect(onDelete.mock.calls[0]).toEqual([1])
})