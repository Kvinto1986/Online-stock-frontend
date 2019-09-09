import React from 'react'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import Button from '@material-ui/core/Button'
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
        const employeeArr = Object.values(employeesList).map((elem) => {
            return (
                <TableRow key={elem.id+'tableRow'}>
                    <TableCell key={elem.id + 'action'} align="center"><Button variant="contained" color="secondary" key={elem.id + 'button'}
                                                                               className={classes.button}
                                                                               onClick={() => handleDelete(elem.id)}>
                        Delete
                    </Button></TableCell>
                    <TableCell key={elem.id + elem.position} align="center">{elem.position}</TableCell>
                    <TableCell key={elem.id + elem.lastName} align="center">{elem.lastName}</TableCell>
                    <TableCell key={elem.id + elem.email} align="center">{elem.email}</TableCell>
                    <TableCell key={elem.id + elem.dateOfBirth} align="center">{moment(elem.dateOfBirth).format('MMMM Do YYYY')}</TableCell>
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
