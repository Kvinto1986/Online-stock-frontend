import React from 'react'
import {TableCell, TableRow, TextField} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'


function Row({id, name, token, onDelete}) {
    return <TableRow>
        <TableCell>
            {name}
        </TableCell>
        <TableCell>
            <TextField
                fullWidth
                value={token}
            />
        </TableCell>
        <TableCell>
            <IconButton color="secondary" onClick={() => onDelete(id)} data-testid={'delete-' + id}>
                <DeleteIcon/>
            </IconButton>
        </TableCell>
    </TableRow>
}

export default Row