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
import moment from "moment";
import { makeStyles } from '@material-ui/core/styles';
import TableContainer from "@material-ui/core/TableContainer";

const columns = [
    {id: 'id', label: 'License', align: 'left'},
    {id: 'name', label: 'Name', align: 'left'},
    {id: 'address', label: 'Address', align: 'center'},
    {id: 'date', label: 'Registration date', align: 'center'},
    {id: 'totalArea', label: 'Area', align: 'center'},
]
const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default ({deleteWarehouse, warehouses}) => {
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
                    {warehouses.slice(rowsCount, allRowsCount).map(row => {
                        return (
                            <TableRow key={row.id}>
                                {columns.map((column, index) => {
                                    return (<TableCell key={column.id} align={column.align}>
                                        {column.id === 'date' ? moment(row[column.id]).format('L') : row[column.id]}
                                    </TableCell>)
                                })}
                                <TableCell align="center">
                                    <Fab color="default" size="small" onClick={() => deleteWarehouse(row.id)}>
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
                count={warehouses.length}
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
