import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Profile from './profile'

const employee = {
    firstName: 'Валерий',
    lastName: 'Жмышенко',
    patronymic: 'Альбертович',
    dateOfBirth: '1982-05-06T23:00:00.000Z',
    email: 'example@mail.ru',
    city: 'Москва',
    street: 'Пушкина',
    house: '11б',
    apartment: '3',
    position: ['manager', 'controller']
}

it('show information', async () => {
    const {getByText} = render(<Profile
        employee={employee}
    />)

    const name = getByText('Жмышенко Валерий Альбертович')
    const dateOfBirth = getByText('Fri May 07 1982')
    const email = getByText('example@mail.ru')
    const address = getByText('Москва city, Пушкина street, house 11б, apartment 3')
    const position = getByText('manager, controller')

    expect(name).toBeInTheDocument()
    expect(dateOfBirth).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(address).toBeInTheDocument()
    expect(position).toBeInTheDocument()
})