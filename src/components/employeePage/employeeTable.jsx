import React from 'react'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import useStyles from './employeeStyle'
import moment from 'moment'

import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

export default ({employeesList, delEmployee, getList}) => {
    const classes = useStyles()

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to delete warehouse?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Accept',
            allowOutsideClick: false
        }).then((result) => {
            if (result.value) {
                Swal.fire({
                    type: 'success',
                    title: 'Congratulations!',
                    text: 'Data successfully changed !',
                    allowOutsideClick: false,
                    timer: 3000
                }).then(() => delEmployee(id))
                    .then(() => getList())
            }
        })

    }

    const CreateTable = () => {
        const employeeArr = employeesList.map((elem) => {
            return (
                <TableRow>
                    <TableCell align="center"><Button variant="contained" color="secondary" className={classes.button}
                                                      onClick={() => handleDelete(elem.id)}>
                        Delete
                    </Button></TableCell>
                    <TableCell align="center">{elem.position}</TableCell>
                    <TableCell align="center">{elem.lastName}</TableCell>
                    <TableCell align="center">{elem.email}</TableCell>
                    <TableCell align="center">{moment(elem.dateOfBirth).format('MMMM Do YYYY')}</TableCell>
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
