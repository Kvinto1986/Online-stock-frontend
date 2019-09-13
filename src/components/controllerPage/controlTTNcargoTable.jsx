import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import Table from '@material-ui/core/Table'
import React from 'react'
import useStyles from './controlTTNstyle'

export default ({cargo}) => {
    const classes = useStyles()

    return (
        <Table className={classes.table} size="small">
            <TableHead>
                <TableRow>
                    <TableCell align="center">ID</TableCell>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Amount</TableCell>
                    <TableCell align="center">Packing material</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {cargo.map((elem) => {
                    return (
                        <TableRow key={elem.id + 'tableRow'}>
                            <TableCell key={elem.id} align="center">{elem.id}</TableCell>
                            <TableCell key={elem.id + elem.name} align="center">{elem.name}</TableCell>
                            <TableCell key={elem.id + elem.amount} align="center">{elem.amount}</TableCell>
                            <TableCell key={elem.id + elem.type} align="center">{elem.type}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}
