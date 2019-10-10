import React from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

export default ({value, setValue, setAction, dataList}) => {

    const arrayKeys = Object.keys(dataList)

    const options = arrayKeys.map((elem) => {
        return <MenuItem key={elem} value={elem}>{elem}</MenuItem>
    })

    const handleChange = (e) => {
        setValue(e.target.value)
        setAction(value)
    }

    return (
        <Select
            value={value}
            onChange={handleChange}
        >
            {options}
        </Select>
    )
}