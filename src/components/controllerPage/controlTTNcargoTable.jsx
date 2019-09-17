import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import Table from '@material-ui/core/Table'
import React from 'react'
import useStyles from './controlTTNstyle'
import InputBase from '@material-ui/core/InputBase'

export default ({cargo, open, handleChangeTTN}) => {
    const classes = useStyles()

    return (
        <Table className={classes.table} size="small">
            <TableHead>
                <TableRow>
                    <TableCell align="left">ID</TableCell>
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="left">Amount</TableCell>
                    <TableCell align="left">Packing material</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {cargo.map((elem) => {
                    return (
                        <TableRow key={elem.id}>
                            <TableCell align="center">
                                <InputBase
                                    disabled={true}
                                    defaultValue={elem.id}
                                />
                            </TableCell>
                            <TableCell align="center">
                                <InputBase
                                    disabled={!open}
                                    defaultValue={elem.name}
                                    name='name'
                                    onChange={(e) => handleChangeTTN(e, elem.id)}
                                />
                            </TableCell>
                            <TableCell align="center">
                                <InputBase
                                    defaultValue={elem.amount}
                                    name='amount'
                                    onChange={(e) => handleChangeTTN(e, elem.id)}
                                    disabled={!open}
                                />
                            </TableCell>
                            <TableCell align="center">
                                <InputBase
                                    defaultValue={elem.type}
                                    name='type'
                                    onChange={(e) => handleChangeTTN(e, elem.id)}
                                    disabled={!open}/>
                            </TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}