import React, {useMemo} from 'react'
import {TextValidator} from 'react-material-ui-form-validator'
import FormHelperText from '@material-ui/core/FormHelperText'
import PropTypes from 'prop-types'


export const TextField = ({
                              max,
                              min,
                              name,
                              required,
                              error,
                              value,
                              helperClass,
                              handleChange,
                              validators = [],
                              errorMessages = [],
                              pattern = /^[a-zA-Z]*$/,
                              ...props
                          }) => {

    const [newValidators, newErrorMessages] = useMemo(() => {
        const newValidators = [...validators]
        const newErrorMessages = [...errorMessages]
        if (required) {
            newValidators.push('required')
            newErrorMessages.push('This field is required')
        }
        if (min) {
            newValidators.push('minStringLength:' + min)
            newErrorMessages.push(`Value should be at least ${min} characters`)
        }
        if (max) {
            newValidators.push('maxStringLength:' + max)
            newErrorMessages.push(`Value should be no more than ${max} characters`)
        }
        return [newValidators, newErrorMessages]
    }, [validators, errorMessages, min, max, required])

    const onChange = ({target: {value: val}}) => pattern.test(val) && handleChange({...value, [name]: val})

    return <>
        <TextValidator
            {...props}
            type="text"
            onChange={onChange}
            value={value[name]}
            validators={newValidators}
            errorMessages={newErrorMessages}
        />
        <FormHelperText className={helperClass}>{error[name]}</FormHelperText>
    </>

}

TextField.prototype = {
    name: PropTypes.string.isRequired,
    error: PropTypes.object.isRequired,
    value: PropTypes.object.isRequired,
    pattern: PropTypes.instanceOf(RegExp),
    min: PropTypes.number,
    max: PropTypes.number,
    required: PropTypes.bool,
    helperClass: PropTypes.string,
    validators: PropTypes.array,
    errorMessages: PropTypes.array
}

export default TextField