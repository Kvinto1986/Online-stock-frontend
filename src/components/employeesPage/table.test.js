import React from 'react'
import {fireEvent, render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import EmployeeTable from './table'
import {wait} from '@testing-library/dom'

const employees = {
    1000: {
        id: '1000',
        position: ['manager', 'controller'],
        lastName: 'One',
        email: 'One@mail.com',
        dateOfBirth: '1970-01-01T00:00:00.000Z'
    },
    2000: {
        id: '2000',
        position: ['operator'],
        lastName: 'Two',
        email: 'Two@mail.com',
        dateOfBirth: '1986-01-01T00:00:00.000Z'
    },
    3000: {
        id: '3000',
        position: ['operator', 'manager', 'controller'],
        lastName: 'Three',
        email: 'Three@mail.com',
        dateOfBirth: '1978-01-01T00:00:00.000Z'
    }
}

it('table rendering test', async () => {

    const onDelete = () => {

    }


    const {getByText} = render(<EmployeeTable
        employees={employees}
        delEmployee={onDelete}
    />)

    expect(getByText('Three')).toBeInTheDocument()
    expect(getByText('Two@mail.com')).toBeInTheDocument()
    expect(getByText('manager, controller')).toBeInTheDocument()
    expect(getByText('operator')).toBeInTheDocument()
})

it('table delete button test', async () => {

    const onDelete = (id) => {
        expect(id).toBe('2000')
    }

    const mockDelete = jest.fn(onDelete)

    const {getByTestId, getByText} = render(<EmployeeTable
        employees={employees}
        delEmployee={mockDelete}
    />)

    const deleteButton = getByTestId('delete-2000')


    fireEvent.click(deleteButton)

    await wait(() => getByText('Accept'))
    const acceptButton = getByText('Accept')
    fireEvent.click(acceptButton)

    await wait(() => mockDelete.mock.calls.length)

    expect(mockDelete.mock.calls.length).toBe(1)
})