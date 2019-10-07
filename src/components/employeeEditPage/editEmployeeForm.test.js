import React from 'react'
import {fireEvent, render} from '@testing-library/react'
import EditUserForm from './editEmployeeForm'
import {wait} from '@testing-library/dom'


it('sending data without password', async () => {
    const mockSubmit = jest.fn()

    const {getByTestId} = render(<EditUserForm
        onSubmit={mockSubmit}
        errors={{}}
    />)

    const name = getByTestId('firstName')
    fireEvent.change(name, {target: {value: 'Ivan'}})

    const lastName = getByTestId('lastName')
    fireEvent.change(lastName, {target: {value: 'Ivanov'}})

    const patronymic = getByTestId('patronymic')
    fireEvent.change(patronymic, {target: {value: 'Ivanovich'}})

    const email = getByTestId('email')
    fireEvent.change(email, {target: {value: 'example@mail.ru'}})

    const addressCity = getByTestId('city')
    fireEvent.change(addressCity, {target: {value: 'Moscow'}})

    const addressStreet = getByTestId('street')
    fireEvent.change(addressStreet, {target: {value: 'Pushkina'}})

    const addressHome = getByTestId('house')
    fireEvent.change(addressHome, {target: {value: '11b'}})

    const addressApartment = getByTestId('apartment')
    fireEvent.change(addressApartment, {target: {value: '3'}})

    const submit = getByTestId('submit')
    fireEvent.click(submit)

    await wait(() => expect(mockSubmit).toBeCalledTimes(1))

    const expected = {
        firstName: 'Ivan',
        lastName: 'Ivanov',
        patronymic: 'Ivanovich',
        dateOfBirth: '1970-01-01',
        email: 'example@mail.ru',
        city: 'Moscow',
        street: 'Pushkina',
        house: '11b',
        apartment: '3'
    }

    await wait(() => expect(mockSubmit.mock.calls[0][0]).toStrictEqual(expected))
})

it('sending data with password', async () => {
    const mockSubmit = jest.fn()

    const {getByTestId} = render(<EditUserForm
        onSubmit={mockSubmit}
        initial={{
            firstName: 'Ivan',
            lastName: 'Ivanov',
            patronymic: 'Ivanovich',
            dateOfBirth: '1970-01-01',
            email: 'example@mail.ru',
            city: 'Moscow',
            street: 'Pushkina',
            house: '11b',
            apartment: '3'
        }}
        errors={{}}
    />)

    const password = getByTestId('password')
    fireEvent.change(password, {target: {value: 'ashcvluash'}})

    const passwordAgain = getByTestId('passwordAgain')
    fireEvent.change(passwordAgain, {target: {value: 'ashcvluash'}})

    const submit = getByTestId('submit')
    fireEvent.click(submit)

    await wait(() => expect(mockSubmit).toBeCalledTimes(1))

    const expected = {
        firstName: 'Ivan',
        lastName: 'Ivanov',
        patronymic: 'Ivanovich',
        dateOfBirth: '1970-01-01',
        email: 'example@mail.ru',
        city: 'Moscow',
        street: 'Pushkina',
        house: '11b',
        apartment: '3',
        password: 'ashcvluash'
    }

    await wait(() => expect(mockSubmit.mock.calls[0][0]).toStrictEqual(expected))
})