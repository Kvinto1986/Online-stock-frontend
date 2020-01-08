import React, {useState} from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import DeleteIcon from "@material-ui/icons/Delete";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from '@material-ui/core/styles';
import TableContainer from "@material-ui/core/TableContainer";
import Link from "../header/Link";

const columns = [
    {id: 'position', label: 'Position', align: 'center'},
    {id: 'name', label: 'Name', align: 'center'},
    {id: 'email', label: 'Email', align: 'center'},
]
const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default ({employees, delEmployee}) => {
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    const rowsCount = page * rowsPerPage
    const allRowsCount = page * rowsPerPage + rowsPerPage

    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small">
                <TableHead>
                    <TableRow>
                        {columns.map(column => (
                            <TableCell
                                key={column.id}
                                align={column.align}
                            >
                                {column.label}
                            </TableCell>
                        ))}
                        <TableCell align="center">
                            Action
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employees.slice(rowsCount, allRowsCount).map(row => {
                        return (
                            <TableRow key={row.id}>
                                {columns.map((column, index) => {
                                    switch (column.id) {
                                        case 'position' :
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {row[column.id].join(', ')}
                                                </TableCell>
                                            )
                                        case 'name' :
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {`${row.firstName} ${row.patronymic} ${row.lastName}`}
                                                </TableCell>
                                            )
                                        case 'email' :
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    <Link href={'/employees/' + row.id}>
                                                        {row[column.id]}
                                                    </Link>
                                                </TableCell>
                                            )
                                        default:
                                            return (<TableCell key={column.id} align={column.align}>
                                                {row[column.id]}
                                            </TableCell>)
                                    }
                                })}
                                <TableCell align="center">
                                    <Fab color="default" size="small" onClick={() => delEmployee(row.id)}>
                                        <DeleteIcon/>
                                    </Fab>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 20]}
                component="div"
                count={employees.length}
                rowsPerPage={rowsPerPage}
                page={page}
                backIconButtonProps={{
                    'aria-label': 'previous page',
                }}
                nextIconButtonProps={{
                    'aria-label': 'next page',
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </TableContainer>
    )
}
