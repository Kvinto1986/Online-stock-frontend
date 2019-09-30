import React from 'react'
import {TextValidator} from 'react-material-ui-form-validator'
import FormHelperText from '@material-ui/core/FormHelperText'
import PropTypes from 'prop-types'


export const NumberField = ({required, name, error = {}, value = {}, helperClass, validators = [], errorMessages = [], handleChange, ...props}) => {
    if (required) {
        validators.push('required')
        errorMessages.push('This field is required')
    }
    const onChange = e => handleChange({...value, [name]: e.target.value})

    return <>
        <TextValidator
            {...props}
            type="number"
            onChange={onChange}
            value={value[name]}
            validators={validators}
            errorMessages={errorMessages}
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