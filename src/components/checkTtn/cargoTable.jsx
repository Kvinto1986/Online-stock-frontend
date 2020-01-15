import React, {useState} from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import ReportWindow from './reportWindow'

const columns = [
    {id: 'id', label: 'Number', align: 'left'},
    {id: 'name', label: 'Name', align: 'left'},
    {id: 'type', label: 'Packaging type', align: 'left'},
    {id: 'amount', label: 'Actual/initial amount', align: 'left'},
    {id: 'dmgFeedback', label: 'Report', align: 'left'},
]

export default ({cargo, initialCargo}) => {
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
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        {columns.map(column => (
                            <TableCell
                                key={column.id}
                                align={column.align}
                                style={{minWidth: column.minWidth}}
                            >
                                {column.label}
                            </TableCell>
                        ))}

                    </TableRow>
                </TableHead>
                <TableBody>
                    {cargo.slice(rowsCount, allRowsCount).map(row => {
                        return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                {columns.map((column, index) => {
                                    if (row.dmgFeedback && column.id === 'dmgFeedback') {
                                        return (<TableCell key={column.id} align={column.align}>
                                            <ReportWindow
                                                report={row.dmgFeedback}/>
                                        </TableCell>)
                                    }
                                    if (!row.dmgFeedback && column.id === 'dmgFeedback') {
                                        return (<TableCell key={column.id} align={column.align}>
                                            No report
                                        </TableCell>)
                                    }
                                    if (column.id === 'amount') {
                                        return (<TableCell key={'column.id'} align={column.align}>
                                           {initialCargo.length>0 ? (`${row[column.id]}/${initialCargo[index][column.id]}`) :
                                                `${row[column.id]}/${row[column.id]}`}
                                        </TableCell>)
                                    }
                                    return (
                                        <TableCell key={column.id} align={column.align}>
                                            {row[column.id]}
                                        </TableCell>
                                    )
                                })}
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
            <TablePagination
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
        </div>
    )
}