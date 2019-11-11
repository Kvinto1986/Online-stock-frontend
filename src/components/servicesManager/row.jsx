import React from 'react'
import {TableCell, TableRow} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import RefreshIcon from '@material-ui/icons/Autorenew'


function Row({id, name, email, onDelete, onEdit}) {
    return <TableRow>
        <TableCell align="center">
            {name}
        </TableCell>
        <TableCell align="center">
            {email}
        </TableCell>
        <TableCell align="center">
            <Button
                variant="contained"
                color="secondary"
                onClick={() => onDelete(id)} data-testid={'delete-' + id}
                startIcon={<DeleteIcon/>}
            >
                Delete
            </Button>
        </TableCell>
            <TableCell align="center">
            <Button
                variant="contained"
                color="primary"
                onClick={() => onEdit({}, id)} data-testid={'delete-' + id}
                startIcon={<RefreshIcon/>}
            >
                Refresh
            </Button>
        </TableCell>
    </TableRow>
}

export default Row