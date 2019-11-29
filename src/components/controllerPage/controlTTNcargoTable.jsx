import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import Table from '@material-ui/core/Table'
import React, {useState} from 'react'
import useStyles from './controlTTNstyle'
import TablePagination from '@material-ui/core/TablePagination'

export default ({cargo}) => {

    const classes = useStyles()

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

    return (
        <>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">ID</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Amount</TableCell>
                        <TableCell align="center">Packing material</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cargo.slice(rowsCount, allRowsCount).map((elem) => {
                        return (
                            <TableRow key={elem.id}>
                                <TableCell align="center">
                                    {elem.id}
                                </TableCell>
                                <TableCell align="center">
                                    {elem.name}
                                </TableCell>
                                <TableCell align="center">
                                    {elem.amount}
                                </TableCell>
                                <TableCell align="center">
                                    {elem.package}
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
            <TablePagination
                style={{marginBottom:'3%'}}
                rowsPerPageOptions={[5, 10, 20]}
                component="div"
                count={cargo.length}
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
        </>
    )
}

