import React from 'react'
import {fireEvent, render} from '@testing-library/react'
import RegisterUserForm from './registerEmployeeForm'


it('sending data', async () => {
    const fakeSubmit = (obj) => {
        const expected = {
            firstName: 'Иван',
            lastName: 'Иванов',
            patronymic: 'Иванович',
            dateOfBirth: '1993-01-02',
            email: 'example@mail.ru',
            city: 'Москва',
            street: 'Пушкина',
            house: '11б',
            apartment: '3',
            role: [1],
            login: 'IvanovIvan93',
            password: 'QjuuwnJ198'
        }
        expect(obj).toStrictEqual(expected)
    }
    const mockSubmit = jest.fn(fakeSubmit)

    const {getByTestId, container} = render(<RegisterUserForm
        onSubmit={mockSubmit}
        roles={
            [
                {value: 1, title: 'Administrator'},
                {value: 2, title: 'Stock owner'}
            ]
        }
    />)

    const name = getByTestId('name')
    fireEvent.change(name, {target: {value: 'Иван'}})

    const lastName = getByTestId('last_name')
    fireEvent.change(lastName, {target: {value: 'Иванов'}})

    const patronymic = getByTestId('patronymic')
    fireEvent.change(patronymic, {target: {value: 'Иванович'}})

    const dateOfBirth = getByTestId('date-of-birth')
    fireEvent.change(dateOfBirth, {target: {value: '1993-01-02'}})

    const email = getByTestId('email')
    fireEvent.change(email, {target: {value: 'example@mail.ru'}})

    const addressCity = getByTestId('city')
    fireEvent.change(addressCity, {target: {value: 'Москва'}})

    const addressStreet = getByTestId('street')
    fireEvent.change(addressStreet, {target: {value: 'Пушкина'}})

    const addressHome = getByTestId('house')
    fireEvent.change(addressHome, {target: {value: '11б'}})

    const addressApartment = getByTestId('apartment')
    fireEvent.change(addressApartment, {target: {value: '3'}})

    const select = container.querySelector('#select-role')
    fireEvent.click(select)

    const administratorItem = getByTestId('Administrator')
    fireEvent.click(administratorItem)

    const login = getByTestId('login')
    fireEvent.change(login, {target: {value: 'IvanovIvan93'}})

    const password = getByTestId('password')
    fireEvent.change(password, {target: {value: 'QjuuwnJ198'}})

    const submit = getByTestId('submit')
    fireEvent.click(submit)

    expect(mockSubmit.mock.calls.length).toBe(1)
})