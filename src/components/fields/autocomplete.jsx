import React from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'

export default ({list, searchItem, setValue}) => {
    return (
        <Autocomplete
            options={list}
            onChange={e => {setValue(e.target.innerHTML)}}
            renderInput={params => (
                <TextField {...params} margin="normal" placeholder={'Search ' + searchItem} fullWidth/>
            )}
        />
    )
}