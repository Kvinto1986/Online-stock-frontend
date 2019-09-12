import React from 'react'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import Button from '@material-ui/core/Button'
import useStyles from './employeeStyle'
import moment from 'moment'

import swalModalWindow from './swalModal'

export default ({employees, delEmployee}) => {
    const classes = useStyles()

    const CreateTable = () => {
        const employeeArr = Object.values(employees).map((elem) => {
            return (
                <TableRow key={elem.id + 'tableRow'}>
                    <TableCell key={elem.id + 'action'} align="center">
                        <Button
                            variant="contained"
                            color="secondary"
                            key={elem.id + 'button'}
                            data-testid={'delete-'+elem.id}
                            className={classes.button}
                            onClick={() => swalModalWindow(elem.id,delEmployee)}>
                            Delete
                        </Button>
                    </TableCell>
                    <TableCell key={elem.id + elem.position[0]} align="center">{elem.position.join(', ')}</TableCell>
                    <TableCell key={elem.id + elem.lastName} align="center">{elem.lastName}</TableCell>
                    <TableCell key={elem.id + elem.email} align="center">{elem.email}</TableCell>
                    <TableCell key={elem.id + elem.dateOfBirth}
                               align="center">{moment(elem.dateOfBirth).format('MMMM Do YYYY')}</TableCell>
                </TableRow>
            )
        })

        return employeeArr
    }


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
