import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import useStyles from './operatorPageStyles'
import {Paper} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

export default ({cargoList, handleDeleteProduct, offButton}) => {

    const classes = useStyles()

    return (
        <Paper>
            <Table className={classes.table} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell colSpan={5} align="center"><Typography color="textSecondary" component="h1" variant="h5" style={{textAlign: 'center'}}>
                            Cargo table
                        </Typography></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">Number</TableCell>
                        <TableCell align="center">Type</TableCell>
                        <TableCell align="center">Amount</TableCell>
                        <TableCell align="center">Boxing</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cargoList.map((elem, index) => {
                        return <TableRow key={elem.type + index}>
                            <TableCell align="center">{elem.id}</TableCell>
                            <TableCell align="center">{elem.name}</TableCell>
                            <TableCell align="center">{elem.amount}</TableCell>
                            <TableCell align="center">{elem.package}</TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </Paper>
    )
}
