import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import ReportWindow from '../checkTtn/reportWindow'
import moment from 'moment'
import Typography from '@material-ui/core/Typography'
import TablePagination from '@material-ui/core/TablePagination'

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
        marginTop: '5%'
    },
    table: {
        minWidth: 650,
    },
})


export default ({reports}) => {
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
        <Paper className={classes.root}>

            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center"colSpan={4} >
                        <Typography variant="h4" align="center" color="textSecondary" component="p" style={{marginBottom:'3%'}}>
                            Reports table
                        </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>

                        <TableCell align="center">Date of creation</TableCell>
                        <TableCell align="center">Service type</TableCell>
                        <TableCell align="center">Status</TableCell>
                        <TableCell align="center">Report</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {reports.slice(rowsCount, allRowsCount).map(row => (
                        <TableRow key={row.sys_id}>
                            <TableCell align="center">{moment(row.sys_created_on).format('MMMM Do YYYY, h:mm:ss a')}</TableCell>
                            <TableCell align="center">{row.u_servicetype}</TableCell>
                            <TableCell align="center">{row.u_status}</TableCell>
                            <TableCell align="center"><ReportWindow report={row.u_incidentinfo}/></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 20]}
                component="div"
                count={reports.length}
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
        </Paper>
    )
}