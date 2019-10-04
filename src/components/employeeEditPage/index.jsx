import React from 'react'
import CurrentEmployeeEditForm from './currentEmployeeEditForm'
import {Paper, Typography} from '@material-ui/core'
import Box from '@material-ui/core/Box'
import useStyles from './styles'


export default () => {
    const {paper} = useStyles()

    return <Paper className={paper}>
        <Box
            component={Typography}
            variant="h4"
            pb={4}
        >
            Your profile
        </Box>
        <CurrentEmployeeEditForm/>
    </Paper>
}