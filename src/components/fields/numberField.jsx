import React, {useMemo} from 'react'
import {TextValidator} from 'react-material-ui-form-validator'
import FormHelperText from '@material-ui/core/FormHelperText'
import PropTypes from 'prop-types'


export const NumberField = ({required, name, error = {}, value = {}, helperClass, validators = [], errorMessages = [], handleChange, ...props}) => {

    const [newValidators, newErrorMessages] = useMemo(() => {
        const newValidators = [...validators]
        const newErrorMessages = [...errorMessages]
        if (required) {
            newValidators.push('required')
            newErrorMessages.push('This field is required')
        }
        return [newValidators, newErrorMessages]
    }, [validators, errorMessages, required])

    const onChange = e => handleChange({...value, [name]: e.target.value})

    return <>
        <TextValidator
            {...props}
            type="number"
            onChange={onChange}
            value={value[name]}
            validators={newValidators}
            errorMessages={newErrorMessages}
        />
        <FormHelperText className={helperClass}>{error[name]}</FormHelperText>
    </>

}

NumberField.prototype = {
    name: PropTypes.string.isRequired,
    error: PropTypes.object,
    value: PropTypes.obj,
    required: PropTypes.bool,
    helperClass: PropTypes.string,
    validators: PropTypes.array,
    errorMessages: PropTypes.array
}

export default NumberField