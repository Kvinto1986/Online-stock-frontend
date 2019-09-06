import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/core/SvgIcon/SvgIcon'
import Paper from '@material-ui/core/Paper'
import React from 'react'
import useStyles from './employeeStyle'


export default ({employeesList}) => {
    console.log(employeesList)
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Table className={classes.table} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Action</TableCell>
                        <TableCell align="center">Position</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Date of birth</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="center">Action</TableCell>
                        <TableCell align="center">Warehouse</TableCell>
                        <TableCell align="center">License</TableCell>
                        <TableCell align="center">Total area</TableCell>
                        <TableCell align="center">Areas</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
    )
}
