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

                    const handleChange = (e) => handleChangeTTN(e, elem.id)

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
                                    inputProps={{'data-testid': elem.id + '-name'}}
                                    disabled={!open}
                                    defaultValue={elem.name}
                                    name="name"
                                    onChange={handleChange}
                                />
                            </TableCell>
                            <TableCell align="center">
                                <InputBase
                                    data-testid={elem.id + '-amount'}
                                    defaultValue={elem.amount}
                                    name="amount"
                                    onChange={handleChange}
                                    disabled={!open}
                                />
                            </TableCell>
                            <TableCell align="center">
                                <InputBase
                                    data-testid={elem.id + '-type'}
                                    defaultValue={elem.type}
                                    name="type"
                                    onChange={handleChange}
                                    disabled={true}/>
                            </TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}

