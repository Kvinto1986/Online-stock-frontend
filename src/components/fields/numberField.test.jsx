import React, {useState} from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import NumberField from './numberField'
import {fireEvent, wait} from '@testing-library/dom'
import {ValidatorForm} from 'react-material-ui-form-validator'

it('should not allow alphabet', async () => {
    const spy = jest.fn()

    const Component = () => {
        const [val, setVal] = useState({test_name: ''})

        return <ValidatorForm noValidate>
            <NumberField
                value={val}
                name="test_name"
                handleChange={values => {
                    setVal(values)
                    spy(values)
                }}
                inputProps={{'data-testid': 'input'}}
            />
        </ValidatorForm>
    }

    const {getByTestId} = render(<Component/>)

    const input = getByTestId('input')

    fireEvent.change(input, {target: {value: 'aaaaa'}})

    fireEvent.change(input, {target: {value: '7'}})
    await wait(() => expect((spy.mock.calls[0])).toContainEqual({test_name: '7'}))
})


it('should show error and value', function () {
    const {getByText, getByDisplayValue} = render(
        <ValidatorForm noValidate>
            <NumberField
                name="test_name"
                error={{
                    wrongProperty: 'false',
                    test_name: 'server error'
                }}
                value={{
                    wrongProperty: 'cascasc',
                    test_name: '7543'
                }}
                inputProps={{'data-testid': 'input'}}
            />
        </ValidatorForm>
    )

    expect(getByText('server error')).toBeInTheDocument()
    expect(getByDisplayValue('7543')).toBeInTheDocument()
})

describe('required attribute', () => {
    it('required attribute should add validator', async () => {
        const onSubmit = jest.fn()

        const Component = () => {
            const [val, setVal] = useState({test_name: ''})

            return <ValidatorForm noValidate onSubmit={onSubmit}>
                <NumberField
                    required
                    value={val}
                    name="test_name"
                    handleChange={setVal}
                    inputProps={{'data-testid': 'input'}}
                />
                <button type="submit" data-testid="submit"/>
            </ValidatorForm>
        }

        const {getByTestId, getByText} = render(<Component/>)

        const input = getByTestId('input')
        const submit = getByTestId('submit')

        fireEvent.click(submit)
        await wait(() => expect(getByText('This field is required')).toBeInTheDocument())

        fireEvent.change(input, {target: {value: '7'}})
        fireEvent.click(submit)
        await wait(() => expect(onSubmit).toBeCalledTimes(1))
    })


    it('test without required attribute', async () => {
        const onSubmit = jest.fn()

        const Component = () => {
            const [val, setVal] = useState({test_name: ''})

            return <ValidatorForm noValidate onSubmit={onSubmit}>
                <NumberField
                    value={val}
                    name="test_name"
                    handleChange={setVal}
                    inputProps={{'data-testid': 'input'}}
                />
                <button type="submit" data-testid="submit"/>
            </ValidatorForm>
        }

        const {getByTestId} = render(<Component/>)

        const submit = getByTestId('submit')

        fireEvent.click(submit)
        await wait(() => expect(onSubmit).toBeCalledTimes(1))
    })
})

it('new validators should works with old', async () => {
    const onSubmit = jest.fn()

    const Component = () => {
        const [val, setVal] = useState({test_name: ''})

        return <ValidatorForm noValidate onSubmit={onSubmit}>
            <NumberField
                value={val}
                name="test_name"
                handleChange={setVal}
                validators={['minStringLength:2']}
                errorMessages={['Too short']}
                inputProps={{'data-testid': 'input'}}
            />
            <button type="submit" data-testid="submit"/>
        </ValidatorForm>
    }

    const {getByTestId, getByText} = render(<Component/>)

    const input = getByTestId('input')

    fireEvent.change(input, {target: {value: '7'}})
    await wait(() => getByText('Too short'))
    let tooShort = getByText('Too short')
    fireEvent.change(input, {target: {value: '77'}})
    await wait(() => expect(tooShort).not.toBeInTheDocument())
})