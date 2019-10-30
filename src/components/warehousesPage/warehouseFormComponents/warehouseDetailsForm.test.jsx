import React, {useState} from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import InputText from '../../fields/textField'
import {fireEvent, wait} from '@testing-library/dom'
import {ValidatorForm} from 'react-material-ui-form-validator'
import {Grid, Box} from '@material-ui/core'

it('details form in action', async () => {
    const onSubmit = jest.fn()
    const coordinatesCall = jest.fn()
    const setNameMock = jest.fn()
    const setLicenseMock = jest.fn()
    const setAddressMock = jest.fn()

    const Form = () => {
        const [name, setName] = useState('')
        const [license, setLicense] = useState('')
        const [address, setAddress] = useState('')

        return (
            <ValidatorForm noValidate onSubmit={onSubmit}>
                <Grid item xs={12}>
                    <InputText
                        min={2}
                        max={30}
                        pattern={/.*/}
                        required
                        fullWidth
                        label="Warehouse name"
                        name="name"
                        value={name || ''}
                        handleChange={value => {
                            setName(value)
                            setNameMock(value)
                        }}
                        error={{}}
                        helperClass={{}}
                        inputProps={{'data-testid': 'inputName'}}
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputText
                        min={15}
                        max={15}
                        pattern={/^[0-9]*$/}
                        required
                        fullWidth
                        label="Warehouse license number"
                        name="license"
                        value={license || ''}
                        error={{}}
                        handleChange={value => {
                            setLicense(value)
                            setLicenseMock(value)
                        }}
                        helperClass={{}}
                        inputProps={{'data-testid': 'inputLicense'}}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Box mb={10}>
                        <InputText
                            pattern={/.*/}
                            required
                            fullWidth
                            label="Warehouse address"
                            name="address"
                            value={address || ''}
                            error={{}}
                            handleChange={values => {
                                setAddress(values)
                                setAddressMock(values)
                            }}
                            helperClass={{}}
                            inputProps={{'data-testid': 'inputAddress'}}
                        />
                        <button 
                            onClick={coordinatesCall}
                            data-testid="coordinatesButton"
                        >
                            Coordinates
                        </button>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <button
                        type="submit"
                        data-testid="submitButton"
                    >
                        Save info
                    </button>
                </Grid>
            </ValidatorForm>
        )
    }

    const {getAllByText, getByTestId} = render(<Form />)

    const inputName = getByTestId('inputName')
    const inputLicense = getByTestId('inputLicense')
    const inputAddress = getByTestId('inputAddress')
    const coordinatesButton = getByTestId('coordinatesButton')
    const submitButton = getByTestId('submitButton')

    fireEvent.click(submitButton)
    await wait(() => getAllByText('This field is required'))

    fireEvent.change(inputName, {target: {value: 'Some name'}})
    await wait(() => expect((setNameMock.mock.calls[0])).toContainEqual({name: 'Some name'}))

    fireEvent.change(inputLicense, {target: {license: '111111111111111'}})
    await wait(() => getAllByText('This field is required'))
    
    fireEvent.change(inputAddress, {target: {value: 'Timofeya Borodina 2, Homiel'}})
    await wait(() => expect((setAddressMock.mock.calls[0])).toContainEqual({address: 'Timofeya Borodina 2, Homiel'}))

    fireEvent.click(coordinatesButton)
    await wait(() => expect(coordinatesCall).toBeCalledTimes(1))
})