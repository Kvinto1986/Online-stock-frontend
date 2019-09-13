import React, {useState} from 'react'
import RegisterEmployeeForm from '../registerEmployee/registerEmployeeForm'
import Profile from './profile'
import {Paper} from '@material-ui/core'
import PropTypes from 'prop-types'
import useStyles from './styles'
import Button from '@material-ui/core/Button'


export default function Switcher({onSubmit, errors, employee, editPermission}) {
    const [editing, setEditing] = useState(false)
    const classes = useStyles()

    return <Paper className={classes.paper}>
        {editPermission !== 'none' &&
        <Button
            color="primary"
            variant="outlined"
            onClick={() => setEditing(!editing)}
            className={classes.editButton}
        >
            {editing ? 'Show profile' : 'Edit'}
        </Button>}
        {editing ?
            <RegisterEmployeeForm
                initial={employee}
                onSubmit={onSubmit}
                errors={errors}
            />
            :
            <Profile
                employee={employee}
            />}
    </Paper>
}

Switcher.propTypes = {
    onSubmit: PropTypes.string,
    errors: PropTypes.object,
    user: PropTypes.object,
    editPermission: PropTypes.bool
}