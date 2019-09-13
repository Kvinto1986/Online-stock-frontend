import React from 'react'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import Button from '@material-ui/core/Button'
import useStyles from './style'
import moment from 'moment'

import swalModalWindow from './swalModel'
import Link from '../header/Link'

export default ({employees, delEmployee}) => {
    const classes = useStyles()
    console.log(employees)
    const CreateTable = () =>
        (Object.values(employees).map(({id, position, lastName, email, dateOfBirth}) =>
                <TableRow key={id}>
                    <TableCell align="center">
                        <Button
                            variant="contained"
                            color="secondary"
                            data-testid={'delete-' + id}
                            className={classes.button}
                            onClick={() => swalModalWindow(id, delEmployee)}>
                            Delete
                        </Button>
                    </TableCell>
                    <TableCell align="center">{position.join(', ')}</TableCell>
                    <TableCell align="center">{lastName}</TableCell>
                    <TableCell align="center">
                        <Link href={'/employees/' + id}>
                            {email}
                        </Link>
                    </TableCell>
                    <TableCell align="center">{moment(dateOfBirth).format('MMMM Do YYYY')}</TableCell>
                </TableRow>
            )
        )


    return (
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
                <CreateTable/>
            </TableBody>
        </Table>
    )
}