import React from 'react'
import Select from 'react-select'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        height: 250,
        minWidth: 290,
    },
    input: {
        display: 'flex',
        padding: 0,
        height: 'auto',
    },
}))

function inputComponent({inputRef, ...props}) {
    return <div ref={inputRef} {...props} />
}

function Control(props) {
    const {children, innerProps, innerRef, selectProps: {classes, TextFieldProps},} = props

    return (
        <TextField
            fullWidth
            InputProps={{
                inputComponent,
                inputProps: {
                    className: classes.input,
                    ref: innerRef,
                    children,
                    ...innerProps,
                },
            }}
            {...TextFieldProps}
        />
    )
}

const components = {
    Control
}

export default ({list, unique, searchItem, value, setValue}) => {
    const classes = useStyles()
    const theme = useTheme()

    const optionsMenu = list.map(elem => {
        return {
            value: elem,
            label: elem,
        }
    })

    const handleChangeSingle = val => {
        setValue(val)
    }

    const selectStyles = {
        input: base => ({
            ...base,
            color: theme.palette.text.primary,
            '& input': {
                font: 'inherit',
            },
        }),
    }

    return (
        <div className={classes.root}>
                <Select
                    classes={classes}
                    styles={selectStyles}
                    inputId="react-select-single"
                    TextFieldProps={{
                        label: unique,
                        InputLabelProps: {
                            htmlFor: 'react-select-single',
                            shrink: true,
                        },
                    }}
                    placeholder={'Search ' + searchItem}
                    options={optionsMenu}
                    components={components}
                    value={value}
                    onChange={handleChangeSingle}
                />
        </div>
    )
}