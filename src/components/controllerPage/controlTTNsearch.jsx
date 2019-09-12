import Select from 'react-select'
import React from 'react'
import Paper from '@material-ui/core/Paper'
import useStyles from './controlTTNstyle'

export default ({ttnsList, findTTN}) => {
    const classes = useStyles()

    return (
        <Paper className={classes.select}>
        <Select
            onChange={findTTN}
            options={ttnsList}
        />
        </Paper>
    )
}
