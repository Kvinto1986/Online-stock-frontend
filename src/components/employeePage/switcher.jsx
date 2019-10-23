import React, {useState} from 'react'
import Profile from './profile'
import {Paper} from '@material-ui/core'
import PropTypes from 'prop-types'
import useStyles from './styles'
import Button from '@material-ui/core/Button'
import EditEmployee from './editEmployee'


export default function Switcher({editEmployee,errors,employee}) {
    const [editing, setEditing] = useState(false)
    const classes = useStyles()

    return <Paper className={classes.paper}>
        <Button
            color="primary"
            variant="outlined"
            onClick={() => setEditing(!editing)}
            className={classes.editButton}
        >
            {editing ? 'Show profile' : 'Edit'}
        </Button>
        {editing ?
            <EditEmployee
                editEmployee={editEmployee}
                employee={employee}
                errors={errors
                }/>
            :
            <Profile employee={employee}/>}
    </Paper>
}

Switcher.propTypes = {
    onSubmit: PropTypes.string,
    errors: PropTypes.object,
    user: PropTypes.object,
    editPermission: PropTypes.bool
}