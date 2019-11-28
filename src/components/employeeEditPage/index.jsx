import React from 'react'
import CurrentEmployeeEditForm from './currentEmployeeEditForm'
import {makeStyles, Typography} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    title: {
        marginBottom: 24,
    }
}));

export default () => {
    const classes = useStyles();

    return (
        <>
            <Typography variant="h4" className={classes.title}>
                Your profile
            </Typography>
            <CurrentEmployeeEditForm/>
        </>
    )
}
