import React from 'react'
import {TextValidator} from 'react-material-ui-form-validator'
import FormHelperText from '@material-ui/core/FormHelperText'
import PropTypes from 'prop-types'


export const TextField = ({required, pattern = /^[a-zA-Z]*$/, name, error = {}, value = {}, helperClass, validators = [], errorMessages = [], handleChange, ...props}) => {
    if (required) {
        validators.push('required')
        errorMessages.push('This field is required')
    }
    const onChange = ({target: {value: val}}) => pattern.test(val) && handleChange({...value, [name]: val})

    return <>
        <TextValidator
            {...props}
            type="text"
            onChange={onChange}
            value={value[name]}
            validators={validators}
            errorMessages={errorMessages}
        />
        <FormHelperText className={helperClass}>{error[name]}</FormHelperText>
    </>

}

TextField.prototype = {
    name: PropTypes.string.isRequired,
    error: PropTypes.object,
    value: PropTypes.obj,
    pattern: PropTypes.instanceOf(RegExp),
    required: PropTypes.bool,
    helperClass: PropTypes.string,
    validators: PropTypes.array,
    errorMessages: PropTypes.array
}

export default TextField