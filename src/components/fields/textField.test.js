import React, {useState} from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import TextField from './textField'
import {fireEvent, wait} from '@testing-library/dom'
import {ValidatorForm} from 'react-material-ui-form-validator'


it('should not allow numbers', async () => {
    const spy = jest.fn()

    const Component = () => {
        const [val, setVal] = useState({test_name: ''})

        return <ValidatorForm noValidate>
            <TextField
                value={val}
                error={{}}
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

    fireEvent.change(input, {target: {value: '7'}})

    fireEvent.change(input, {target: {value: 'aaaaaa'}})
    await wait(() => expect((spy.mock.calls[0])).toContainEqual({test_name: 'aaaaaa'}))
})


it('should show error and value', function () {
    const {getByText, getByDisplayValue} = render(
        <ValidatorForm noValidate>
            <TextField
                name="test_name"
                error={{
                    wrongProperty: 'false',
                    test_name: 'server error'
                }}
                value={{
                    wrongProperty: 'cascasc',
                    test_name: 'awsd_vghh'
                }}
                inputProps={{'data-testid': 'input'}}
            />
        </ValidatorForm>
    )

    expect(getByText('server error')).toBeInTheDocument()
    expect(getByDisplayValue('awsd_vghh')).toBeInTheDocument()
})

describe('required attribute', () => {
    it('required attribute should add validator', async () => {
        const onSubmit = jest.fn()

        const Component = () => {
            const [val, setVal] = useState({test_name: ''})

            return <ValidatorForm noValidate onSubmit={onSubmit}>
                <TextField
                    required
                    value={val}
                    error={{}}
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

        fireEvent.change(input, {target: {value: 'a'}})
        fireEvent.click(submit)
        await wait(() => expect(onSubmit).toBeCalledTimes(1))
    })


    it('test without required attribute', async () => {
        const onSubmit = jest.fn()

        const Component = () => {
            const [val, setVal] = useState({test_name: ''})

            return <ValidatorForm noValidate onSubmit={onSubmit}>
                <TextField
                    value={val}
                    error={{}}
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
            <TextField
                value={val}
                error={{}}
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

    fireEvent.change(input, {target: {value: 'a'}})
    await wait(() => getByText('Too short'))
    let tooShort = getByText('Too short')
    fireEvent.change(input, {target: {value: 'aa'}})
    await wait(() => expect(tooShort).not.toBeInTheDocument())
})

it('value should match pattern', async () => {
    const spy = jest.fn()

    const Component = () => {
        const [val, setVal] = useState({test_name: ''})

        return <ValidatorForm noValidate>
            <TextField
                value={val}
                error={{}}
                name="test_name"
                pattern={/^[1-3]+$/}
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

    fireEvent.change(input, {target: {value: '533'}})

    fireEvent.change(input, {target: {value: '123'}})
    await wait(() => expect((spy.mock.calls[0])).toContainEqual({test_name: '123'}))
})

it('min and max args', async () => {
    const spy = jest.fn()

    const Component = () => {
        const [val, setVal] = useState({test_name: ''})

        return <ValidatorForm noValidate>
            <TextField
                value={val}
                name="test_name"
                error={{}}
                min={2}
                max={3}
                handleChange={values => {
                    setVal(values)
                    spy(values)
                }}
                inputProps={{'data-testid': 'input'}}
            />
        </ValidatorForm>
    }

    const {getByTestId, getByText} = render(<Component/>)

    const input = getByTestId('input')

    fireEvent.change(input, {target: {value: 'a'}})
    await wait(() => getByText('Value should be at least 2 characters'))

    fireEvent.change(input, {target: {value: 'aaaa'}})
    await wait(() => getByText('Value should be no more than 3 characters'))
})