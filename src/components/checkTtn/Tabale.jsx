import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import moment from 'moment'
import Container from '@material-ui/core/Container'

export default function TtnTable(props) {
    if(props.rows) {
        return (
            <Container>
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">TTN Number</TableCell>
                                <TableCell align="right">Status</TableCell>
                                <TableCell align="right">Data&nbsp;of&nbsp;Registration</TableCell>
                                <TableCell align="right">Driver</TableCell>
                                <TableCell align="right">Car Number</TableCell>
                                <TableCell align="right">Description</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.rows.map(row => (
                                <TableRow key={row.name}>
                                    <TableCell align="right">{row.status}</TableCell>
                                    <TableCell align="right">{row.number}</TableCell>
                                    <TableCell
                                        align="right">{moment(row.dataOfRegistration).format('MMMM Do YYYY')}</TableCell>
                                    <TableCell align="right">{row.driver}</TableCell>
                                    <TableCell align="right">{row.carNumber}</TableCell>
                                    <TableCell align="right">{row.description}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </Container>
        )
    }
    else return null
}
